import { RegistrationServiceInterface } from "@/application/services/interfaces/registration.interface";
import { User } from "@/domain/entities/user.interface";
import { HttpMethod } from "@/domain/protocols/http/enum/method";
import { HttpClientInterface } from "@/domain/protocols/http/interfaces/http-client";

export class RegistrationService implements RegistrationServiceInterface {
  constructor(
    private readonly httpClient: HttpClientInterface,
    private readonly url: string
  ) {}
  async register(createUserRequestDTO: CreateUserRequestDTO): Promise<User> {
    const reponse = await this.httpClient.request({
      url: this.url,
      method: HttpMethod.POST,
      body: createUserRequestDTO,
    });
    return reponse.body;
  }
}
