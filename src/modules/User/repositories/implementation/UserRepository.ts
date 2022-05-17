import { IUserRepository } from "../IUserRepository";
import { prisma } from '../../../../Prisma/Prisma';
import { IUserRequestProps } from '../IUserRepository';
import { User } from "../../../../model/User/User";


export class UserRepository implements IUserRepository {

  private constructor(private repository: typeof prisma) { }

  private static INSTANCE: UserRepository

  public static getInstance(): UserRepository {

    if (!UserRepository.INSTANCE) {

      UserRepository.INSTANCE = new UserRepository(prisma);
    }

    return UserRepository.INSTANCE;
  }

  async create({ name, email, password }: IUserRequestProps): Promise<IUserRequestProps> {

    const userProps = {

      name,
      email,
      password

    }

    const user = new User(userProps);

    const createUser = await this
      .repository
      .user
      .create({

        data: {

          name,
          email,
          password
        }
      });

    return createUser;
  }

  async findOne({ email }: IUserRequestProps): Promise<User | null> {


    const findUser = await this
      .repository
      .user
      .findUnique({
        where: { email: email }
      });

    if (findUser !== null) {

      const requestFindUser: User = {

        props: {

          id: findUser.id,
          name: findUser.name,
          email: findUser.email,
          password: findUser.password,

        }
      }

      return requestFindUser;
    }

    return findUser;


  }

  async findById(sub: string): Promise<User | null> {

    const findUser = await this
      .repository
      .user
      .findUnique({
        where: { id: sub }
      });

    if (findUser !== null) {

      const findUserRequestProps: User = {

        props: {

          name: findUser.name,
          email: findUser.email,
          password: "This is a particular information!"
        }
      }

      return findUserRequestProps;
    }

    return findUser;
  }
}