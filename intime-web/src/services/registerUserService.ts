import React from "react";
import { Aluno, User } from "../interfaces/interfaces";
import { Api } from "../providers";

export const findByFilter = () => Api.get<User[]>("/users/list-all");

export const loginVerify = (user: User) =>
  Api.post<{ user: User }>("/users/login", {
    usuario: user.nome,
    email: user.email,
    senha: user.senha,
    dataCadastro: new Date(),
  });

export const createUser = (user: User) =>
  Api.post<{ user: User }>("/users/create", {
    nome: user.nome,
    email: user.email,
    senha: user.senha,
    data: new Date(),
  });

export const updateUser = (user: User) => {
  Api.post<{ user: User }>("/users/update"),
    {
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      data: new Date(),
    };
};
