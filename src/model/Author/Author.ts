import { Entity } from '../Entity'

type AuthorProps = {

  name: string
  lastName: string
}

export class Author extends Entity<AuthorProps>{

  constructor(props: AuthorProps) {

    super(props)
  }
}