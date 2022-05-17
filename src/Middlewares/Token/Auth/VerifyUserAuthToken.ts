import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';
import { authTokenPasswordHash } from "../../../modules/User/useCases/Token/Auth/CreateUserAuthTokenUseCase";
import { UserRepository } from "../../../modules/User/repositories/implementation/UserRepository";
import { AppError } from '../../../Errors/AppError';


interface IVerifyTokenPayloadProps {

  name: string
  email: string
  user_id: string
}

const verifyUserAuthToken = async (request: Request, response: Response, next: NextFunction) => {

  const authToken = request.headers.authorization;

  if (authToken === undefined) {

    throw new AppError("Token is missing!", 404);
  }

  const splitToken = authToken.split(" ");
  const [, token] = splitToken;

  try {

    const verifyUserAuthToken = verify(token, authTokenPasswordHash) as IVerifyTokenPayloadProps;

    const userRepository = UserRepository
      .getInstance();

    const findUserById = await userRepository
      .findById(verifyUserAuthToken.user_id);

    if (!findUserById) {

      throw new AppError("This user does exists!", 401);
    }

    request.user = {

      id: verifyUserAuthToken
        .user_id
    }

    next();
  }
  catch {

    throw new AppError("Token is invalid!", 401);
  }
}

export { verifyUserAuthToken }