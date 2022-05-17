import { User } from "../../../model/User/User";

export interface IUserRequestProps {

  name: string
  email: string
  password: string

}

export interface IFindUserRequestProps {

  props: {

    name: string,
    email: string
    password: string
    id?: string
  }

}

export interface IUserRepository {

  create({ name, email, password }: IUserRequestProps): Promise<IUserRequestProps>
  findOne({ email }: IUserRequestProps): Promise<User | null>
  findById(sub: string): Promise<User | null>

}