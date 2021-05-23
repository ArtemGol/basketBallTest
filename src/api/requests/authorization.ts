import {loginInstance} from "../baseRequest"
import {IAuth} from "../../modules/auth/authTypes";
import {ILoginRequest, IRegisterRequest} from "../dto/IAuthrization";

export const authorization = {
  registered: ({userName, login, password}: IRegisterRequest): Promise<IAuth> => {
    return loginInstance.post('Auth/SignUp', {
      userName,
      login,
      password
    }).then((response) => {
      return response.data;
    })
  },
  login: ({login, password}: ILoginRequest): Promise<IAuth> => {
    return loginInstance.post('Auth/SignIn', {
      login,
      password
    }).then((response) => {
      return response.data;
    })
  },
}