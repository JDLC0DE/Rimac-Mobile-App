import axios, { AxiosRequestConfig } from "axios";
import Constants from "expo-constants";
import IHttpClient from "./http.interface";

const { API_URL } = Constants.expoConfig?.extra ?? {};

class HttpClient implements IHttpClient {
  private readonly axios: typeof axios;
  public static instance: HttpClient;

  static getInstance() {
    if (!this.instance) {
      this.instance = new HttpClient();
    }
    return this.instance;
  }

  constructor() {
    this.axios = axios;

    axios.interceptors.request.use(async (requestConfig) => {
      requestConfig.baseURL = API_URL;
      return requestConfig;
    });

    this.axios.interceptors.response.use(undefined, (err) => {
      if (err.response) {
      }

      return Promise.reject(err);
    });
  }

  public get<ResponseType>(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .get<ResponseType>(url, config)
      .then((response) => response.data);
  }

  public post<DataType, ResponseType>(
    url: string,
    data?: DataType,
    config?: AxiosRequestConfig
  ) {
    return this.axios
      .post<ResponseType>(url, data, config)
      .then((response) => response.data);
  }

  public patch<DataType, ResponseType>(
    url: string,
    data?: DataType,
    config?: AxiosRequestConfig
  ) {
    return this.axios
      .patch<ResponseType>(url, data, config)
      .then((response) => response.data);
  }

  public put<DataType, ResponseType>(
    url: string,
    data?: DataType,
    config?: AxiosRequestConfig
  ) {
    return this.axios
      .put<ResponseType>(url, data, config)
      .then((response) => response.data);
  }

  public delete<ResponseType>(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .delete<ResponseType>(url, config)
      .then((response) => response.data);
  }
}

export default HttpClient;
