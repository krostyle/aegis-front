import { User } from "@/domain/entities/user.interface";

export interface RegistrationUseCaseInterface {
  register(newUserDTO: CreateUserRequestDTO): Promise<User>;
}
