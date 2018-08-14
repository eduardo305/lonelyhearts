import { User } from './user.model';

export class UserResponseModel {
  public results: User[];

  constructor(users) {
    this.setResults(users);
  }

  setResults(users) {
    this.results = users.map(user => {
      return new User(user);
    });
  }

}

class Info {
  public page: number;
  public results: number;
  public seed: string;
  public version: string;

  constructor(page: number, results: number, seed: string, version: string) {
    this.page = page;
    this.results = results;
    this.seed = seed;
    this.version = version;
  }
}
