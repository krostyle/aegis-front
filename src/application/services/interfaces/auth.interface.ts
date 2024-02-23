import { User } from "../../../domain/entities/user.interface";

export interface AuthServiceInterface {
  login(email: string, password: string): Promise<User>;
  logout(): Promise<void>;
}
