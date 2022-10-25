import { Cep } from './interfaces'

export interface AlunoInterface {
  id: Number;
  student: string;
  enrollment: Number;
  classroom?: string;
  classroom_id?: number;
  subject?: [{materia: {nome: string}}];
  status?: string;
  financialResponsable?: string;
  pedagogicalResponsable?: string;
  phoneNumber?: string;
  homePhoneNumber?: string;
  address?: Cep;
}

export interface Teste {
  nome: String;
}
