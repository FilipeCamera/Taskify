import User, { UserData } from '@domain/entities/user';

interface IUserRepository {
  create({ fullname, email, password }: UserData): Promise<User>;
}

export { IUserRepository };
