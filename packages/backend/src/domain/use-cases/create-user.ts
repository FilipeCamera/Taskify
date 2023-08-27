import User, { UserData } from '../entities/user';

interface CreateUser {
  exec(data: CreateUser.request): Promise<CreateUser.response>;
}

namespace CreateUser {
  export type request = UserData;
  export type response = User;
}

export { CreateUser };
