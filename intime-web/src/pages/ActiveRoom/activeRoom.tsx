import { Button, Select, Spin } from 'antd'

import { DashboardOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import DataTable from '../../components/DataTable/dataTable'
import SearchSelect from '../../components/SeachSelect/searchSelect'
import BaseContainer from '../../components/BaseContainer/baseContainer'
import styled from 'styled-components'
import { useCallback, useEffect, useState } from 'react'
import { Aluno } from '../../interfaces/interfaces'
import {
  findByFilter,
  getAllClass,
  getAllDiscipline,
  getAllEnrollment,
  getPendenciesStudent,
} from '../../services/activeRoomService'
import './activeRoom.css'
import { Matriculas } from '../../interfaces/matriculasInterface'
import { Disciplinas } from '../../interfaces/disciplinasInterface'
import { ClassInterface } from '../../interfaces/classInterface'
import { Justifications } from '../../interfaces/justificationInterface'

type ActiveRoomProps = {
  className?: string;
};

const ActiveRoom = ({ className }: ActiveRoomProps) => {
  const [metrics, setMetrics] = useState<Aluno[]>()
  const [filteredMetrics, setFilteredMetrics] = useState<Aluno[]>()
  const [pendencies, setPendencies] = useState<Justifications[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [discipline, setDiscipline] = useState<Disciplinas[]>()
  const [classes, setClasses] = useState<ClassInterface[]>()
  const [enrollment, setEnrollment] = useState<Matriculas[]>()
  const status = ['Pendente', 'Ausente', 'Presente']

  const findStudents = useCallback(async () => {
    const { status, data } = await findByFilter()
    if (status !== 200) throw new Error()
    setMetrics(data)

    setFilteredMetrics(data)
    setLoading(false)
  }, [])



  const getDiscipline = useCallback(async () => {
    await getAllDiscipline().then((res) => {
      setDiscipline(res.data)
    })
  }, [])

  const getClass = useCallback(async () => {
    await getAllClass().then((res) => {
      setClasses(res.data)
    })
  }, [])

  const getEnrollment = useCallback(async () => {
    await getAllEnrollment().then((res) => {
      setEnrollment(res.data)
    })
  }, [])

  useEffect(() => {
    findStudents()
    getDiscipline()
    getEnrollment()
    getClass()
  }, [findStudents, getClass, getDiscipline, getEnrollment])

  const handleEnrollment = async (value: string) => {
    if (value != '') {
      if (filteredMetrics != metrics) {
        const filter = filteredMetrics?.filter((item) => item.enrollment === Number(value))
        filter?.length ? setFilteredMetrics(filter) : setFilteredMetrics([])
      } else {
        setFilteredMetrics(
          metrics?.filter((item) => item.enrollment === Number(value))
        )
      }
    }
  }

  const handleDisciplina = async (value: string) => {
    if (value != '') {
      if (filteredMetrics != metrics) {
        const filter = filteredMetrics?.filter( (item) => item.subject![0].materia.nome === value)
        filter?.length ? setFilteredMetrics(filter) : setFilteredMetrics([])
      } else {
        setFilteredMetrics(
          metrics?.filter((item) => item.subject![0].materia.nome === value)
        )
      }
    }
  }

  const handleClass = async (value: string) => {
    if (value != '') {
      if (filteredMetrics != metrics && filteredMetrics?.length) {
        const filter = filteredMetrics?.filter((item) => item.classroom_id === Number(value))
        filter?.length ? setFilteredMetrics(filter) : setFilteredMetrics([])
      } else {
        setFilteredMetrics(
          metrics?.filter((item) => item.id === Number(value))
        )
      }
    }
  }

  const handleStatus = async (value: string) => {
    if (value != '') {
      if (filteredMetrics != metrics && filteredMetrics?.length) {
        const filter = filteredMetrics?.filter((item) => item.status === value)
        console.log(filter)
        filter?.length ? setFilteredMetrics(filter) : setFilteredMetrics([])
      } else {
        setFilteredMetrics(
          metrics?.filter((item) => item.status === value)
        )
      }
    }
  }

  return (
    <div className={className}>
      <div
        className="page-header border"
        style={{
          margin: '0px',
          padding: 24,
          height: 'auto',
        }}
      >
        <div className="d-sm-flex m-b-5 align-items-center justify-content-between">
          <div className="media align-items-center m-b-5">
            <div className="media-body m-l-15">
              <h5 className="mb-0 title-header">Análise de presenças</h5>
              <span className="text-gray description">
                Visualize e gerencie os dados de cada turma, filtrando seus
                alunos e corrigindo pendências justificadas.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button
              type="default"
              className="filter-button d-flex justify-content-center align-items-center"
            >
              <Link
                to={'/dashboard'}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <DashboardOutlined />
                <span style={{ marginLeft: '5px' }}>Dashboard</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <BaseContainer
        className="container-fluid justify-self-center mt-3 mb-3"
        color="#ffff"
      >
        <div className="row p-3">
          <div className="col-sm-12 col-lg-3 col-md-6 mt-3 mb-3">
            <Select
              showSearch
              placeholder="Selecione a Matrícula"
              onChange={handleEnrollment}
              style={{ width: '100%' }}
            >
              <Select.Option key={'default_enrollment'} value={''}>
                <span style={{ color: 'rgba(0, 0, 0, 0.2)' }}>
                  {'Selecione a Matrícula'}
                </span>
              </Select.Option>
              {enrollment?.map((item) => (
                <Select.Option key={item.matricula} value={item.matricula}>
                  {item.matricula}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-1">
            <Select
              showSearch
              placeholder="Selecione o Status"

              onChange={handleStatus}
              style={{ width: '100%' }}
            >
              <Select.Option key={'default_status'} value={''}>
                <span
                  style={{
                    color: 'rgba(0, 0, 0, 0.2)',
                    background: 'transparent',
                  }}
                >
                  {'Selecione  Status'}
                </span>
              </Select.Option>
              {status?.map((item) => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-1">
            <Select
              showSearch
              placeholder="Selecione a Turma"
              onChange={handleClass}
              style={{ width: '100%' }}
            >
              <Select.Option key={'default_classes'} value={''}>
                <span
                  style={{
                    color: 'rgba(0, 0, 0, 0.2)',
                    background: 'transparent',
                  }}
                >
                  {'Selecione a Turma'}
                </span>
              </Select.Option>
              {classes?.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.nome}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-1">
            <Select
              showSearch
              placeholder="Selecione a Disciplina"
              onChange={handleDisciplina}
              style={{ width: '100%' }}
            >
              <Select.Option key={'default_discipline'} value={''}>
                <span
                  style={{
                    color: 'rgba(0, 0, 0, 0.2)',
                    background: 'transparent',
                  }}
                >
                  {'Selecione Disciplina'}
                </span>
              </Select.Option>
              {discipline?.map((item) => (
                <Select.Option key={item.nome} value={item.nome}>
                  {item.nome}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-1 w-100  d-flex justify-content-end align-items-end">
            <Button
              onClick={() => setFilteredMetrics(metrics)}
              type="default"
              className="clear-filter-button"
            >
              Limpar Filtros
            </Button>
          </div>
        </div>
        {!loading ? (
          <DataTable data={filteredMetrics} />
        ) : (
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: '20px' }}
          >
            <Spin />
          </div>
        )}
      </BaseContainer>
    </div>
  )
}

export default styled(ActiveRoom)`
  width: 100%;
  height: 100%;
  .title {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }
  .title-header {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
  }
  .description {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }
  .header-content {
    padding: 0px;
  }
  .to-dash-button {
    background: transparent;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.textGray};
    padding: 20px 30px;
  }
  .container-fluid {
    color: ${(props) => props.theme.colors.white};
  }
  .filter-button {
    background-color: transparent;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.textGray};
    padding: 20px 30px;
  }

  .clear-filter-button {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 4px;
    border: none;
    color: ${(props) => props.theme.colors.white};
    padding: 6px 8px;
  }
`
