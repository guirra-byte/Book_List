import { IBookRepository } from "../../../Books/repository/IBookRepository";


export class CreateBookUseCase {

  constructor(private bookRepository: IBookRepository) { }

  execute(bookName: string, pages: number, description: string, author: string, name: string, lastName: string, smalldescription: string, bookId: string) {

    const verifyBookAlreadyExists = this.bookRepository.findOne(bookId)
    if (verifyBookAlreadyExists) {

      throw new Error("This book already exists")
    }

    const newBook = this.bookRepository.create(bookName, pages, description, author, name, lastName, smalldescription)
    return newBook
  }
}