import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import { IUserRepository } from '../../../repositories/IUserRepository';
import { IUserRequestProps } from '../../../repositories/IUserRepository';

import { AppError } from '../../../../../Errors/AppError';

export const authTokenPasswordHash = "d0636f12b4544c969bad628f38a339ce"

interface IUserAuthTokenRequestProps {

  token: string,
  user: {

    name: string
    email: string
  }
}

export class CreateUserAuthTokenUseCase {

  constructor(private userRepository: IUserRepository) { }

  async execute({ email, password, name }: IUserRequestProps): Promise<IUserAuthTokenRequestProps> {

    const user = await this.userRepository.findOne({ email, name, password });

    if (!user) {

      throw new AppError("Email or Password are incorrect!");
    }

    const compareUserPasswordHash = await compare(password, user.props.password);

    if (!compareUserPasswordHash) {

      throw new AppError("Email or Password are incorrect!");
    }

    const authToken = sign({}, authTokenPasswordHash, {

      subject: user.props.id,
      expiresIn: "1d"
    });

    const userAuthTokenRequest: IUserAuthTokenRequestProps = {

      token: authToken,
      user: {

        name: user.props.name,
        email: user.props.email,
      }
    }

    return userAuthTokenRequest;


  }
}