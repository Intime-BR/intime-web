import { Justifications } from './../interfaces/justificationInterface'
import { Card } from '../interfaces/cardInterface'
import { Class } from '../interfaces/interfaces'
import { Api } from '../providers'
import { PresencesSubject } from '../interfaces/presencesSubjectInterface'

export const getAllClasses = () => Api.get<Class[]>('/class/filter/list-all')

export const getAllPresents = () => Api.get<Card>('/students/filter/get-presents')

export const getAllPendences = () => Api.get<Card>('/students/filter/get-missing')

export const getAllFaults = () => Api.get<Card>('/students/filter/get-late')

export const getMostDiscipline = () => Api.get<Card>('/discipline/filter/most-presents-discipline')

export const getAllJustifications = () => Api.get<Justifications[]>('/pendencies/get-all')

export const getAllPresencesForSubject = () => Api.get<PresencesSubject[]>('/discipline/filter/get-graphic-data')