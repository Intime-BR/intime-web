import React from "react";
import { Aluno } from "../interfaces/interfaces";
import { Api } from "../providers";

export const findByFilter = () => Api.get<{ students: Aluno }>("/students/get");
