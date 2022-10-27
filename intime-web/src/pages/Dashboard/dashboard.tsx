import { Button, DatePicker, Drawer, Space, Select } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import DynamicLineChart from '../../components/MiddleContent/lineChart'
import DynamicSuggestionsCard from '../../components/MiddleContent/suggestionsCard'
import SuggestionCardContent from '../../components/MiddleContent/suggestionCardContent'
import PresenceForSubject from '../../components/BottomCharts/ChartPresenceForSubject'
import DailyAbsence from '../../components/BottomCharts/ChartDailyAbsence'
import BaseContainer from '../../components/BaseContainer/baseContainer'
import ChartsEstimate from '../../components/ChartsEstimate/chartsEstimate'
import styled from 'styled-components'
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker'
import { useCallback, useEffect, useState } from 'react'
import SearchSelect from '../../components/SeachSelect/searchSelect'
import CommomText from '../../components/CommomText/commomText'
import './dashboard.css'
import { modalVisibility } from '../../utils/exports'
import { Class, DailyAbsenceChart } from '../../interfaces/interfaces'
import { getAllClasses, getAllFaults, getAllJustifications, getAllPendences, getAllPresencesForSubject, getAllPresents, getMostDiscipline } from '../../services/dashboardService'
import { Card } from '../../interfaces/cardInterface'
import { getAllClass } from '../../services/activeRoomService'
import { ClassInterface } from '../../interfaces/classInterface'
import { Justifications } from '../../interfaces/justificationInterface'
import { PresencesSubject } from '../../interfaces/presencesSubjectInterface'


type DashBoardProps = {
  className?: string;
};

const Dashboard = ({ className }: DashBoardProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)


  const [classes, setClasses] = useState<Class[]>()
  const [classesItem, setItemClasses] = useState<ClassInterface[]>()
  const [selectedItemClass, setSelectedItemClass] = useState<string[]>([])
  const [presents, setPresents] = useState<Card>()
  const [pendences, setPendences] = useState<Card>()
  const [faults, setFaults] = useState<Card>()
  const [discipline, setDiscipline] = useState<Card>()
  const [justifications, setJustifications] = useState<Justifications[]>()
  const [dailyAbsenceData, setDailyAbsenceData] = useState<DailyAbsenceChart[]>()

  const fetchAllClasses = useCallback(async () => {
    await getAllClasses().then((res) => {
      setClasses(res.data)
    })
  }, [])

  const getPresents = useCallback(async () => {
    await getAllPresents().then((res) => {
      setPresents(res.data)
    })
  }, [])


  const getPendences = useCallback(async () => {
    await getAllPendences().then((res) => {
      setPendences(res.data)
    })
  }, [])

  const getFaults = useCallback(async () => {
    await getAllFaults().then((res) => {
      setFaults(res.data)
    })
  }, [])

  const getMostOnlyDiscipline = useCallback(async () => {
    await getMostDiscipline().then((res) => {
      setDiscipline(res.data)
    })
  }, [])

  const getAllJustificationsList = useCallback(async () => {
    await getAllJustifications().then((res) => {
      setJustifications(res.data)
    })
  }, [])

  const handleDateChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string
  ) => {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  const getClass = useCallback(async () => {
    await getAllClass().then((res) => {
      setItemClasses(res.data)
    })
  }, [])

  

  useEffect(() => {

    fetchAllClasses()
    getFaults()
    getPendences()
    getPresents()
    getMostOnlyDiscipline()
    getAllJustificationsList()
    getClass()
  }, [fetchAllClasses, getClass, getFaults, getMostOnlyDiscipline, getPendences, getPresents, getAllJustificationsList])


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
          <div className="media align-items-center m-b-6">
            <div className="media-body header-content">
              <h5 className="mb-0 title-header">Dados Gerais</h5>
              <span className="text-gray description">
                Consulte os dados de todas as turmas em tempo real, analise as
                estatísticas e melhore o desempenho escolar.
              </span>
            </div>
          </div>
          {/* <div className="m-b-5">
            <Button
              className="filter-button d-flex justify-content-center align-items-center"
              onClick={() => setIsVisible(modalVisibility(isVisible))}
            >
              <FilterOutlined />
              <span>Filtros</span>
            </Button>
          </div> */}
        </div>
      </div>
      <BaseContainer
        color="transparent"
        border="none"
        className="row justify-content-center estimate-chart-container"
        shadow="none"
      >
        <div className="col-md-6 col-lg-3 col-sm-12 mt-3 chartEstimate">
          <ChartsEstimate
            title={'Presentes'}
            content={`${presents?.presences.toString()} Alunos `}
            variation={presents?.percentage}
            up={true}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={'Faltas'}
            content={`${faults?.presences.toString()} Alunos `}
            variation={faults?.percentage}
            up={false}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={'Atrasados'}
            content={`${pendences?.presences.toString()} Alunos`}
            variation={pendences?.percentage}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={'Matéria Destaque'}
            content={discipline?.nome}
            variation={discipline?.percentage}
          />
        </div>
      </BaseContainer>
      <BaseContainer
        color="transparent"
        border="none"
        className="row justify-content-center middle-charts-container"
        shadow="none"
      >
        <div className="col-md-12 col-lg-6 col-sm-12 mt-3">
          <DynamicLineChart data={classes} />
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12 col-sm-12 mt-3">
          <DynamicSuggestionsCard>

            {
              justifications?.map(item => {
                return (
                  <div>
                    <SuggestionCardContent
                      image="https://joeschmoe.io/api/v1/random"
                      name={item.nome}
                      desc={
                        item.descricao
                      }
                      status={item.status}
                      date={item.data}
                    />
                  </div>
                )
              })
            }
           

          </DynamicSuggestionsCard>
        </div>
      </BaseContainer>

      <BaseContainer
        color="transparent"
        border="none"
        className="row justify-content-center middle-charts-container"
        shadow="none"
      >
        <div className="col-md-12 col-lg-6 col-sm-12 mt-3 mb-3">
          <DailyAbsence data={[
      { name: 'Alunos Totais', value: Number(presents?.presences) + Number(presents?.presences) + Number(presents?.presences), color: '#00C49F' },
      { name: 'Alunos Faltosos', value: Number(faults?.presences), color: '#ff4842' },
    ]}/>
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12 mt-3 mb-3">
          <PresenceForSubject />
        </div>
      </BaseContainer>
      {/* <Drawer
        title="Filtros"
        visible={isVisible}
        onClose={() => setIsVisible(modalVisibility(isVisible))}
      >
        <CommomText>
          Utilize os filtros para encontrar dados específicos.
        </CommomText>
        <div className="row mb-3">
          <div className="col-md-12">
          <Select
              showSearch
              placeholder="Selecione a Turma"
              value={selectedItemClass}
              onChange={setSelectedItemClass}
              style={{ width: '100%' }}
            >
              {classes?.map((item) => (
                <Select.Option value={item.nome}>{item.nome}</Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <CommomText>Selecione um período</CommomText>
        <div className="row">
          <div className="col-md-12">
            <DatePicker
              placeholder="Selecione o período"
              className="w-100"
              onChange={handleDateChange}
            />
          </div>
        </div>
      </Drawer> */}
    </div>
  )
}

export default styled(Dashboard)`
  width: 100%;
  height: 100%;
  .estimate-chart-container {
    margin: 0 auto;
  }
  .middle-charts-container {
    margin: 0 auto;
  }
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
    padding: 0px 12px;
  }

  .filter-button {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: white;
    padding: 20px 30px;
  }
`
