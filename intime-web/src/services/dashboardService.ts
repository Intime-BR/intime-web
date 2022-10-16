import { Class } from "../interfaces/interfaces";
import { Api } from "../providers";

export const getAllClasses = () => Api.get<Class[]>("/class/filter/list-all");
