import { HttpClientInterface } from "@/domain/protocols/http/interfaces/http-client";
import { HttpRequest } from "@/domain/protocols/http/types/http-request";
import { HttpResponse } from "@/domain/protocols/http/types/http-response";
import axios, { AxiosResponse } from "axios";

export class AxiosHttpClient implements HttpClientInterface {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
