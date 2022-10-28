import { MetricsInterface } from '../interfaces/metricsInterface'
import { Api } from '../providers'


export const getMetrics = (turma: number, id: string) => Api.get<MetricsInterface[]>(`/studentes/get-metrics/${turma}/${id}`)