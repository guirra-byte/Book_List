import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase) { }
  async handle(request: Request, response: Response) {

    const { name, email, password } = request.body;

    try {

      const createUser = await this
        .createUserUseCase
        .execute(name, email, password);

      return response
        .status(201)
        .send();
    }
    catch (exception) {

      return response
        .status(400)
        .send(exception);
    }
  }
}