import { User } from '../interfaces/interfaces'
import { Api } from '../providers'

export const loginVerify = async (user: User): Promise<any> => {
  return await Api.post<{ user: User }>('/users/login', {
    email: user.email,
    senha: user.senha
  })
}
