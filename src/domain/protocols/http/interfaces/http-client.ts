import { HttpRequest } from "../types/http-request";
import { HttpResponse } from "../types/http-response";

export interface HttpClientInterface<T = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<T>>;
}
