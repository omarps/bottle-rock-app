import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

export interface IRequestResponse {
  data: AxiosResponse | null;
  error: AxiosError | null;
}

export default class AxiosRequestService {
  baseUrl: string | undefined;

  constructor() {
    this.baseUrl = process.env.REACT_APP_BOTTLE_ROCK_BE_URL;
  }

  async get(
    endpointUrl: string,
    config?: AxiosRequestConfig
  ): Promise<IRequestResponse> {
    const url = `${this.baseUrl}${endpointUrl}`;

    config = {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    return await axios
      .get(url, config)
      .then((res: AxiosResponse) => {
        const response: IRequestResponse = {
          data:
            res.data.meta || res.data.included || res.data.message
              ? res.data
              : res.data.data,
          error: null,
        };
        return response;
      })
      .catch((err: AxiosError) => {
        const error: IRequestResponse = {
          data: null,
          error: err,
        };
        return error;
      });
  }

  // Next steps: add post, put, and delete methods.
}
