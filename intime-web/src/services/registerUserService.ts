import React from "react";
import { Aluno, User } from "../interfaces/interfaces";
import { Api } from "../providers";

export const findByFilter = () => Api.get<Aluno[]>("/students/get");

export const loginVerify = (user: User) =>
  Api.post<{ user: User }>("/users/login", {
    usuario: user.usuario,
    email: user.email,
    senha: user.senha,
    dataCadastro: new Date()
  });