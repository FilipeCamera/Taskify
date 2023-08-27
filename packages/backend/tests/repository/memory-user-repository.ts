import { IUserRepository } from '@data/repository/user-repository';
import User, { UserData } from '@domain/entities/user';

class MemoryUserRepository implements IUserRepository {
  private users: Array<User> = [];

  async create({ fullname, email, password }: UserData): Promise<User> {
    if (fullname.length === 0 || email.length === 0 || password.length === 0)
      return null;

    const user = new User({ fullname, email, password });

    this.users.push(user);

    return user;
  }
}

export { MemoryUserRepository };
