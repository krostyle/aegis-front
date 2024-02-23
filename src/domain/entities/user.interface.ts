import { Role } from "./role.interface";

export interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  roles: Role[];
}
