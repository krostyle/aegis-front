import { AuthServiceInterface } from "@/application/services/interfaces/auth.interface";
import { AuthUseCaseInterface } from "./auth-use-case.interface";
import { User } from "@/domain/entities/user.interface";

export class AuthUseCase implements AuthUseCaseInterface {
  constructor(
    private readonly auth: AuthServiceInterface,
    private readonly url: string
  ) {}
  login(email: string, password: string): Promise<User> {
    return this.auth.login(email, password);
  }

  logout(): Promise<void> {
    return this.auth.logout();
  }
}
