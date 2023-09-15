import axios, { AxiosInstance } from "axios";
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";
import { ElLoading } from "element-plus";
import { HttpData, HttpRequestConfig, InterceptorHooks } from "../types/http";
//自定义返回数据类型
class HttpRequest {
  config: HttpRequestConfig<any>;
  instance: AxiosInstance;
  interceptorHooks?: InterceptorHooks;
  showLoading = true;
  loading?: LoadingInstance;

  constructor(axiosRequestConfig: HttpRequestConfig<any>) {
    this.config = axiosRequestConfig;
    this.instance = axios.create(axiosRequestConfig);
    this.setupInterceptor();
  }

  request<D, T>(config: HttpRequestConfig<D>): Promise<HttpData<T>> {
    this.showLoading = config.showLoading ?? false;
    return new Promise((resolve, reject) => {
      this.instance
        .request<T, HttpData<T>>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  setupInterceptor(): void {
    this.instance.interceptors.request.use(this.config.interceptorHooks?.requestInterceptor, this.config.interceptorHooks?.requestInterceptorCatch);
    this.instance.interceptors.response.use(this.config.interceptorHooks?.responseInterceptor, this.config.interceptorHooks?.resonpenseInterceptorCatch);
    this.instance.interceptors.request.use((config) => {
      console.log("set request intercept");
      if (this.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: "Loading",
          background: "rgba(0, 0, 0, 0.7)",
          fullscreen: true,
        });
      }
      return config;
    });

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();
        return res;
      },
      (err) => {
        this.loading?.close();
        console.error(err);
        throw err;
        // return err
      },
    );
  }

  get<D, T>(config: HttpRequestConfig<D>): Promise<HttpData<T>> {
    return this.request({ ...config, method: "GET" });
  }
  post<D, T>(config: HttpRequestConfig<D>): Promise<HttpData<T>> {
    return this.request({ ...config, method: "POST" });
  }
  put<D, T>(config: HttpRequestConfig<D>): Promise<HttpData<T>> {
    return this.request({ ...config, method: "PUT" });
  }
  delete<D, T>(config: HttpRequestConfig<D>): Promise<HttpData<T>> {
    return this.request({ ...config, method: "DELETE" });
  }
}

export default HttpRequest;
