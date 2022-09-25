import { Cep } from "./interfaces";

export interface AlunoInterface {
  id: Number;
  student: String;
  enrollment: Number;
  classroom?: String;
  subject?: Subject;
  status?: string[];
  financialResponsable?: String;
  pedagogicalResponsable?: String;
  phoneNumber?: String;
  homePhoneNumber?: String;
  address?: Cep;
}

export interface Subject {
  materia?: Teste;
}

export interface Teste {
  nome: String;
  professor: Number;
}
