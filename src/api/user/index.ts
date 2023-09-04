import { generalHttpRequest } from "@/http";
import { UserLoginParam, UserLoginResult } from "../type";

enum API {
  LOGIN_URL = "/user/login",
  USER_INFO_URL = "/user/info",
}
export const login = (param: UserLoginParam) =>
  generalHttpRequest.post<UserLoginParam, UserLoginResult>({
    url: API.LOGIN_URL,
    data: param,
    showLoading: true,
  });
