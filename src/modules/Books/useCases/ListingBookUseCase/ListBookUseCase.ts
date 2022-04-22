import { IBookRepository } from "../../../Books/repository/IBookRepository";

export class ListBookUseCase {

  constructor(private bookRepository: IBookRepository) { }

  execute() {

    const returnListBook = this.bookRepository.findAll()
    return returnListBook
  }
}