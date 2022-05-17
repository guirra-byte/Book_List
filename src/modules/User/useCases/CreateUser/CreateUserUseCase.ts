import { hash } from "bcryptjs";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserRequestProps } from "../../repositories/IUserRepository";

export class CreateUserUseCase {

  constructor(private userRepository: IUserRepository) { }
  async execute(name: string, email: string, password: string) {

    const createUser = await this
      .userRepository
      .create({ name, email, password });

    return createUser;
  }
}