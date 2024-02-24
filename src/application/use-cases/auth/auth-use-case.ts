import { AuthServiceInterface } from "@/application/services/interfaces/auth.interface";
import { AuthUseCaseInterface } from "./auth-use-case.interface";
import { User } from "@/domain/entities/user.interface";

export class AuthUseCase implements AuthUseCaseInterface {
  constructor(private readonly auth: AuthServiceInterface) {}
  login(loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO> {
    return this.auth.login(loginRequestDTO);
  }

  logout(): Promise<void> {
    return this.auth.logout();
  }
}
