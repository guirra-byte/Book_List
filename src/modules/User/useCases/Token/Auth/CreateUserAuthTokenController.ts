import { Request, Response } from 'express';
import { CreateUserAuthTokenUseCase } from './CreateUserAuthTokenUseCase';

export class CreateUserAuthTokenController {

  constructor(private createUserAuthTokenUseCase: CreateUserAuthTokenUseCase) { }
  async handle(request: Request, response: Response) {

    const { name, email, password } = request.body;

    try {

      const createUserAuthToken = await this
        .createUserAuthTokenUseCase
        .execute({ name, email, password });

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