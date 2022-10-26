import { Justifications } from './../interfaces/justificationInterface'
import { MetricsInterface } from './../interfaces/metricsInterface'
import { ClassInterface } from './../interfaces/classInterface'
import { Matriculas } from './../interfaces/matriculasInterface'
import { Disciplinas } from '../interfaces/disciplinasInterface'
import { Aluno } from '../interfaces/interfaces'
import { Api } from '../providers'

export const findByFilter = () => Api.get<Aluno[]>('/students/get')

export const getAllEnrollment = () => Api.get<Matriculas[]>('/students/filter/get-matriculas')

export const getAllDiscipline = () => Api.get<Disciplinas[]>('/discipline/filter/list-all')

export const getAllClass = () => Api.get<ClassInterface[]>('/class/filter/list-all')

export const getPendenciesStudent = (hashId : number) => Api.get<Justifications[]>(`/pendencies/get/${hashId}`)