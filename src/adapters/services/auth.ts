import { User } from "@/domain/entities/user.interface";
import { AuthServiceInterface } from "@/application/services/interfaces/auth.interface";
import { HttpClientInterface } from "@/domain/protocols/http/interfaces/http-client";
import { HttpMethod } from "@/domain/protocols/http/enum/method";

export class AuthService implements AuthServiceInterface {
  constructor(
    private readonly httpClient: HttpClientInterface,
    private readonly url: string
  ) {}
  async login(loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO> {
    const response = await this.httpClient.request({
      url: this.url,
      method: HttpMethod.POST,
      body: {
        email: loginRequestDTO.email,
        password: loginRequestDTO.password,
      },
    });
    return response.body;
  }

  async logout(): Promise<void> {
    await this.httpClient.request({
      url: this.url,
      method: HttpMethod.POST,
    });
  }
}
