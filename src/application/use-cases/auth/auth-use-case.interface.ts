import { User } from "@/domain/entities/user.interface";

export interface AuthUseCaseInterface {
  login(loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO>;
  logout(): Promise<void>;
}
