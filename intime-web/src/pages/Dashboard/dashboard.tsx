import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { ChartsEstimate } from '../../components/Charts-estimate/charts-estimate';
import DynamicLineChart from '../../components/MiddleContent/lineChart';
import DynamicSuggestionsCard from '../../components/MiddleContent/suggestionsCard';
import SuggestionCardContent from '../../components/MiddleContent/suggestionCardContent';
import image from '../../assets/others/user_face_template.svg';
import { PresenceForSubject } from '../../components/bottom-charts/ChartPresenceForSubject';
import { ProgressBarElementor } from '../../components/bottom-charts/ChartProgressBar';
import { DailyAbsence } from '../../components/bottom-charts/ChartDailyAbsence';

export function Dashboard() {
  return (
    <div>
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
            <div className="media-body m-l-15">
              <h5 className="mb-0">Dados Gerais</h5>
              <span className="text-gray font-size-13">
                Consulte os dados de todas as turmas em tempo real, analise as estatísticas e melhore o desempenho
                escolar.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button type="primary" className="d-flex justify-content-center align-items-center">
              <FilterOutlined />
              <span>Filtros</span>
            </Button>
          </div>
        </div>
      </div>

      <ChartsEstimate />
      <div className="row m-4 justify-content-between">
        <DynamicLineChart />
        <DynamicSuggestionsCard>
          <SuggestionCardContent
            image={image}
            name={'Estevao Boaventura'}
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dictum tristique. Nunc accumsan tempus ex vel bibendum. '
            }
            status={'Pendente'}
            date={'24 de maio, 2022'}
          />
          <SuggestionCardContent
            image={image}
            name={'Estevao Boaventura'}
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dictum tristique. Nunc accumsan tempus ex vel bibendum. '
            }
            status={'Pendente'}
            date={'24 de maio, 2022'}
          />
          <SuggestionCardContent
            image={image}
            name={'Estevao Boaventura'}
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dictum tristique. Nunc accumsan tempus ex vel bibendum. '
            }
            status={'Pendente'}
            date={'24 de maio, 2022'}
          />
        </DynamicSuggestionsCard>
      </div>

      <div className="row" style={{margin:'15px'}}>
      <ProgressBarElementor />
      <PresenceForSubject />
      <DailyAbsence />
      </div>

    </div>
  );
}
