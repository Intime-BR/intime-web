import axios from "axios";

//instancia do axios na porta do backend
export const Api = axios.create({
  baseURL: "http://localhost:3000/api",
});
