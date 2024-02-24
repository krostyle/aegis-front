export interface AuthServiceInterface {
  login(loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO>;
  logout(): Promise<void>;
}
