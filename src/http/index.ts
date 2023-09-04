import HttpRequest from "./request";

import { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { HttpRequestConfig } from "../types/http";
import { ElMessage } from "element-plus";
import { ContentTypeEnum, ResultStatusEnum } from "@/enums/http";
import localCatch from "@/utils/localCatch";

const HttpRequestConfig: HttpRequestConfig<any> = {
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  headers: new AxiosHeaders({ "Content-Type": ContentTypeEnum.JSON }),
  interceptorHooks: {
    requestInterceptor: (config: InternalAxiosRequestConfig) => {
      console.log("request Interceptor");
      const token = localCatch.getStorage("Authorization");
      if (token && typeof config.headers?.set === "function") {
        config.headers.set("Authorization", JSON.parse(token));
      }
      // const rawAxiosRequestConfig: RawAxiosRequestConfig = config;
      // const internalAxiosRequestConfig: InternalAxiosRequestConfig = {
      //   ...rawAxiosRequestConfig,
      //   headers: config.headers as AxiosHeaders,
      // };
      return config;
    },
    requestInterceptorCatch(error: any) {
      console.log("request Interceptor Catch");
      return error;
    },
    responseInterceptor: (response: AxiosResponse) => {
      console.log("response Interceptor");
      const { code, message } = response.data;
      if (code !== ResultStatusEnum.SUCCESS) {
        ElMessage({
          message: message ?? "系统报错",
          type: "error",
        });

        const err = new Error("系统问题");
        throw err;
      } else {
        ElMessage({
          message: message ?? "操作成功",
          type: "success",
        });
        return response.data;
      }
    },
  },
};

const generalHttpRequest = new HttpRequest(HttpRequestConfig);

export { generalHttpRequest };
