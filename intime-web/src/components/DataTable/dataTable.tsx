import styled from 'styled-components'
import { Aluno, Metrics, Justifications } from '../../interfaces/interfaces'
import {
  EditFilled,
  ExclamationCircleOutlined,
  FileDoneOutlined,
  RedoOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Empty, Form, Input, Space, Table, Tabs, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Avatar } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { modalVisibility } from '../../utils/exports'
import DataTableModal from './dataTableModal'
import CommomText from '../CommomText/commomText'
import { RequiredMark } from 'antd/lib/form/Form'
import { getMetrics } from '../../services/datatableService'
import StudentMetric from '../StudentMetric/studentMetric'
import { getPendenciesStudent, updatePendencieStudent } from '../../services/activeRoomService'
import { Tooltip } from 'antd'

type DataTableProps = {
  className?: string;
  data?: Aluno[];
};

const DataTable = ({ className, data }: DataTableProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [aluno, setAluno] = useState<Aluno>()
  const [metrics, setMetrics] = useState<Array<Metrics>>()
  const [pendencies, setPendencies] = useState<Justifications[]>()
  const [controller, setController] = useState<boolean>(false)

  const fetchAllStudentPendences = useCallback(async () => {
   aluno ? await getMetrics(aluno?.classroom_id!, aluno?.id.toString()).then((res) => {
      setMetrics(res.data)
    }) : ''
  }, [aluno])


  const findPendenciesByStudent = useCallback(async () => {
    const { status, data } = await getPendenciesStudent(aluno!.id)
    if (status !== 200) throw new Error()
    setPendencies(data)
  }, [aluno])

  useEffect(() => {
    fetchAllStudentPendences()
    findPendenciesByStudent()
  },[fetchAllStudentPendences, findPendenciesByStudent, controller])


  const [form] = Form.useForm()
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>('optional')

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue)
  }

  const handleCurrentAluno = (data: Aluno) => {
    setIsVisible(modalVisibility(isVisible))
    setAluno(data)
  }


  const updatePendencieByStudent = (id: number)  => {
    updatePendencieStudent(id)
    setPendencies(pendencies)
    setController(!controller)
  }

  const columns: ColumnsType<Aluno> = [
    {
      title: 'Aluno',
      dataIndex: 'student',
      key: 'student',
      render: (text) => (
        <div className="d-flex align-items-center">
          <Avatar
            style={{
              backgroundColor: 'rgba(39,52,182, 0.6)',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="avatar"
            icon={<UserOutlined />}
          />
          <span className="text-nowrap" style={{ marginLeft: '8px' }}>
            {text}
          </span>
        </div>
      ),
    },
    {
      title: 'Matrícula',
      dataIndex: 'enrollment',
      key: 'enrollment',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Status Diário',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          <Tag
                className="rounded"
                style={{ padding: '2px 10px', fontSize: '13px' }}
                color={handleTagColor(status)}
                key={status}
              >
                {status}
          </Tag>
        </>
      ),
    },
    {
      title: 'Sala',
      dataIndex: 'classroom',
      key: 'classroom',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Matéria',
      dataIndex: 'subject[0].materia.nome',
      key: 'subject',
      render: (_, { subject }) => (
        <>
          <a>{subject![0]?.materia?.nome}</a>
        </>
      ),
      // render: (text) => <a>{text}</a>,
    },

    {
      title: 'Ações',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>
            <EditFilled onClick={() => handleCurrentAluno(record)} />
          </a>
          <a>
            <ExclamationCircleOutlined
              onClick={() => console.log('INFO BUTTON')}
            />
          </a>
        </Space>
      ),
    },
  ]



  const columnsPendencies: ColumnsType<Justifications> = [
    {
      title: 'Matéria',
      dataIndex: 'materia',
      key: 'materia',
      render: (text) => (
        <div className="d-flex align-items-center">
          <span className="text-nowrap" style={{ marginLeft: '8px' }}>
            {text}  
          </span>
        </div>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
             <Tag
                className="rounded"
                style={{ padding: '2px 10px', fontSize: '13px' }}
                color={handleTagColor(status)}
                key={status}
              >
                {status}
              </Tag>
        </>
      ),
    },
    {
      title: 'Data',
      dataIndex: 'data',
      key: 'data',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Ações',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
            <Tooltip  placement="bottom" title="Ao clicar, você atualizará o status do aluno para Presente.">
              <a>
                <RedoOutlined
                  onClick={() => updatePendencieByStudent(aluno!.id)}
                />
              </a>
            </Tooltip>
        </Space>
      ),
    },
  ]

  const handleTagColor = (tag: String) => {
    switch (tag) {
      case 'presente':
        return '#2EB73C'
      case 'pendente':
        return '#EBAA02'
      case 'ausente':
        return 'rgba(255, 0, 0, 0.66)'
    }
  }

  return (
    <div className={className}>
      <Table
        scroll={{ x: true }}
        columns={columns}
        dataSource={data}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Não há dados"
            />
          ),
        }}
      />
      <DataTableModal
        title="Editar Dados"
        isVisible={isVisible}
        onCancel={() => setIsVisible(modalVisibility(isVisible))}
        onOk={() => setIsVisible(modalVisibility(isVisible))}
        okButtonText="Salvar"
        width="70%"
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <FileDoneOutlined
              style={{
                fontSize: '24px',
                color: 'white',
                background: 'rgba(235, 170, 2, 1)',
                width: '32px',
                height: '32px',
                padding: '4px',
                borderRadius: '6px',
                marginRight: '6px',
              }}
            />
            <div className="">
              <p className="m-0" style={{ fontSize: '14px' }}>
                Visualize o relatório da aluno(a) {aluno?.student}.
              </p>
              <p className="m-0" style={{ fontSize: '14px' }}>
                Aqui você encontra dados específicos de cada matéria.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img
              style={{
                width: '100px',
                objectFit: 'cover',
                padding: '6px',
                marginBottom: '8px',
              }}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="foto de perfil do usuario"
            />
            <div className="d-flex flex-column">
              <CommomText
                style={{ fontSize: '16px', margin: '0', padding: '0' }}
              >
                Aluno: {aluno?.student}
              </CommomText>
              <CommomText
                style={{ fontSize: '16px', margin: '0', padding: '0' }}
              >
                Matrícula: {aluno?.enrollment}
              </CommomText>
              <CommomText
                style={{ fontSize: '16px', margin: '0', padding: '0' }}
              >
                Turma: {aluno?.classroom}
              </CommomText>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Dados Matrícula" key="1">
              <Form
                form={form}
                layout="vertical"
                initialValues={{ requiredMarkValue: requiredMark }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
              >
                <div className="row">
                  <div className="col-4">
                    <Form.Item htmlFor="nome" label="Nome" required>
                      <Input
                        id="nome"
                        disabled
                        value={aluno?.student.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item htmlFor="matricula" label="Matrícula" required>
                      <Input
                        id="matricula"
                        disabled
                        value={aluno?.enrollment.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item htmlFor="turma" label="Turma" required>
                      <Input
                        id="turma"
                        disabled
                        value={aluno?.classroom?.toString()}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Form.Item
                      htmlFor="responsavel_financeiro"
                      label="Responsável Financeiro"
                      required
                    >
                      <Input
                        id="responsavel_financeiro"
                        disabled
                        value={aluno?.financialResponsable?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item
                      htmlFor="responsavel_financeiro"
                      label="Responsável Pedagógico"
                      required
                    >
                      <Input
                        id="responsavel_pedagogico"
                        disabled
                        value={aluno?.pedagogicalResponsable?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item htmlFor="telefone" label="Telefone" required>
                      <Input
                        id="telefone"
                        disabled
                        value={aluno?.phoneNumber?.toString()}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Form.Item
                      htmlFor="telefone_fixo"
                      label="Telefone Fixo"
                      required
                    >
                      <Input
                        id="telefone_fixo"
                        disabled
                        value={aluno?.homePhoneNumber?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item htmlFor="cep" label="CEP" required>
                      <Input
                        id="cep"
                        disabled
                        value={aluno?.address?.cep?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item htmlFor="rua" label="Rua" required>
                      <Input
                        id="rua"
                        disabled
                        value={aluno?.address?.logradouro?.toString()}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Form.Item htmlFor="numero" label="Número" required>
                      <Input
                        id="numero"
                        disabled
                        value={aluno?.address?.numero?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item htmlFor="bairro" label="Bairro" required>
                      <Input
                        id="bairro"
                        disabled
                        value={aluno?.address?.bairro?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item htmlFor="cidade" label="Cidade" required>
                      <Input
                        id="cidade"
                        disabled
                        value={aluno?.address?.localidade?.toString()}
                      />
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Métricas" key="2">
              <div className="row">
                {metrics?.map((item) => {
                  return <StudentMetric metrics={item} />
                })}
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Pendências" key="3">
              <div className="row">
              <Table
                scroll={{ x: true }}
                columns={columnsPendencies}
                dataSource={pendencies}
                locale={{
                  emptyText: (
                    <Empty
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                      description="Não há dados"
                    />
                  ),
                }}
                />
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </DataTableModal>
    </div>
  )
}
export default styled(DataTable)`
  width: 100%;
  height: 100%;
`
