import { IUserRepository } from '@data/repository/user-repository';
import User, { UserData } from '@domain/entities/user';
import { CreateUser } from '@domain/use-cases/create-user';

class DbCreateUser implements CreateUser {
  constructor(private readonly userRepository: IUserRepository) {}

  async exec({ fullname, email, password }: UserData): Promise<User> {
    const user = await this.userRepository.create({
      fullname,
      email,
      password,
    });

    if (!user) throw new Error('Error ao criar usuário');

    return user;
  }
}

export { DbCreateUser };
