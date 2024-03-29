import { User } from "@/domain/entities/user.interface";

export interface RegistrationUseCaseInterface {
  register(createUserRequestDTO: CreateUserRequestDTO): Promise<User>;
}
