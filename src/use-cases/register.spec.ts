import { expect, describe, it } from 'vitest';
import { RegisterUseCase } from './register';
import { compare } from 'bcryptjs';

describe('Register Use Case', () =>  {
  it('should hash user password upon registration', async () => {
    const registerUseCase = new RegisterUseCase({
      findByEmail: async (email) => undefined,

      async create(data) {
        return {
          id: 'user-2',
          name: data.name,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      },
    });

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456'
    });

    const isPasswordIsCorrectlyHashed = await compare('123456', user.password_hash);

    expect(isPasswordIsCorrectlyHashed).toBe(true);
  })
})