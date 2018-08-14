import { User } from './user.model';

export interface UserInterface {
  results: User[];
  mapUser(): User[];
}
