import User, { UserData } from '@domain/entities/user';

interface IUserRepository {
  create({ fullname, email, password }: UserData): Promise<User>;
  findEmail(email: string): Promise<User>;
}

export { IUserRepository };
