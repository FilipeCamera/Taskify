import { UserData } from '@domain/entities/user';
import { DbCreateUser } from './db-create-user';
import { MemoryUserRepository } from '@tests/repository/memory-user-repository';

describe('Teste de criação de usuário', () => {
  it('Criando usuário', async () => {
    const repository = new MemoryUserRepository();

    const dbCreateUser = new DbCreateUser(repository);

    const userCreate: UserData = {
      fullname: 'Alan',
      email: 'alan@email.com',
      password: '12345678',
    };

    const user = await dbCreateUser.exec(userCreate);

    expect(user).toBeTruthy();
    expect(user.getFullname).toEqual('Alan');
  });
  it('Retornar erro ao criar usuário', async () => {
    const repository = new MemoryUserRepository();

    const dbCreateUser = new DbCreateUser(repository);

    const userCreate: UserData = {
      fullname: '',
      email: 'alan@email.com',
      password: '12345678',
    };

    await expect(
      async () => await dbCreateUser.exec(userCreate)
    ).rejects.toThrow('Error ao criar usuário');
  });
});
