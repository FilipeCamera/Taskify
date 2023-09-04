import { IUserRepository } from '@data/repository/user-repository';
import { VerifyUser } from '@domain/use-cases/verify-user';

class DbVerifyUser implements VerifyUser {
  constructor(private readonly userRepository: IUserRepository) {}

  async exec(email: string): Promise<Boolean> {
    const user = await this.userRepository.findEmail(email);
    if (!user) return false;
    return true;
  }
}

export { DbVerifyUser };
