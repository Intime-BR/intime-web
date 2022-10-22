import { Cep } from './interfaces'

export interface AlunoInterface {
  id: Number;
  student: String;
  enrollment: Number;
  classroom?: String;
  subject?: [{materia: {nome: string}}];
  status?: string;
  financialResponsable?: String;
  pedagogicalResponsable?: String;
  phoneNumber?: String;
  homePhoneNumber?: String;
  address?: Cep;
}

export interface Teste {
  nome: String;
}
