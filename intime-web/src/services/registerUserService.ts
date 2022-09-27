import React from "react";
import { Aluno, User } from "../interfaces/interfaces";
import { Api } from "../providers";

export const findByFilter = () => Api.get<User[]>("/users/list-all");

export const loginVerify = (user: User) =>
  Api.post<{ user: User }>("/users/login", {
    usuario: user.nome,
    email: user.email,
    senha: user.senha,
    dataCadastro: new Date()
  });