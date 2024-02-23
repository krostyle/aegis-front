import { User } from "@/domain/entities/user.interface";

export interface AuthUseCaseInterface {
  login(email: string, password: string): Promise<User>;
  logout(): Promise<void>;
}
