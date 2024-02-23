import { User } from "@/domain/entities/user.interface";

export interface RegistrationServiceInterface {
  register(createUserRequestDTO: CreateUserRequestDTO): Promise<User>;
}
