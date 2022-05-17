import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../../modules/User/repositories/implementation/UserRepository';
import { AppError } from '../../Errors/AppError';

const verifyUserAlreadyExists = async (request: Request, response: Response, next: NextFunction) => {

  const { email } = request.body;

  const userRepository = UserRepository
    .getInstance();

  const findUserAndReport = await userRepository
    .findOne(email);

  if (findUserAndReport) {

    throw new AppError("This user already exists!", 400);
  }

  next();
}

export { verifyUserAlreadyExists }