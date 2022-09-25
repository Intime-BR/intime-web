import React from "react";
import { Aluno, User } from "../interfaces/interfaces";
import { Api } from "../providers";

export const loginVerify = (user: User) =>
  Api.post<{ user: User }>("/users/login", {
    email: user.email,
    senha: user.senha,
  });
