import { randomUUID } from 'node:crypto';

type UserData = {
  fullname: string;
  email: string;
  password: string;
};

class User {
  private id: string;
  private fullname: string;
  private email: string;
  private password: string;

  constructor({ fullname, email, password }: UserData, id?: string) {
    this.id = id ? id : randomUUID();
    this.email = email;
    this.fullname = fullname;
    this.password = password;
  }

  get getId() {
    return this.id;
  }

  get getFullname() {
    return this.fullname;
  }

  set setFullname(fullname: string) {
    this.fullname = fullname;
  }

  get getEmail() {
    return this.email;
  }

  set setEmail(email: string) {
    this.email = email;
  }

  get getPassword() {
    return this.password;
  }

  set setPassword(password: string) {
    this.password = password;
  }
}

export { UserData, User as default };
