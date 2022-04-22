import { Entity } from '../Entity'

type BookProps = {

  name: string
  description: string

}
export class Book extends Entity<BookProps> {

  constructor(props: BookProps) {

    super(props)
  }
}