import { MemoryUserRepository } from '@tests/repository/memory-user-repository';
import { DbVerifyUser } from './db-verify-user';
import { DbCreateUser } from './db-create-user';
import { UserData } from '@domain/entities/user';

describe('Teste de Verificação de existencia de usuário', () => {
  const repository = new MemoryUserRepository();

  beforeEach(async () => {
    const dbCreateUser = new DbCreateUser(repository);

    const user: UserData = {
      fullname: 'Teste',
      email: 'teste@email.com',
      password: 'teste',
    };

    await dbCreateUser.exec(user);
  });
  it('Retornar verdadeiro caso exista usuário', async () => {
    const dbVerifyUser = new DbVerifyUser(repository);

    const emailExist = 'teste@email.com';

    const exist = await dbVerifyUser.exec(emailExist);

    expect(exist).toEqual(true);
  });
});
