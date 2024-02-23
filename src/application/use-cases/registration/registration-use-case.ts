import { User } from "@/domain/entities/user.interface";
import { RegistrationUseCaseInterface } from "./registration-use-case.interface";
import { RegistrationServiceInterface } from "@/application/services/interfaces/registration.interface";

export class RegistrationUseCase implements RegistrationUseCaseInterface {
  constructor(
    private readonly registrationService: RegistrationServiceInterface
  ) {}
  register(createUserRequestDTO: CreateUserRequestDTO): Promise<User> {
    return this.registrationService.register(createUserRequestDTO);
  }
}
