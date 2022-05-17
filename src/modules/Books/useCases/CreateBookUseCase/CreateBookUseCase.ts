import { IBookRepository } from "../../../Books/repository/IBookRepository";
import { AppError } from "../../../../Errors/AppError";


export class CreateBookUseCase {

  constructor(private bookRepository: IBookRepository) { }

  execute(bookName: string, pages: number, description: string, author: string, name: string, lastName: string, smallDescription: string, bookId: string) {

    const verifyBookAlreadyExists = this
      .bookRepository
      .findOne(bookId);

    if (verifyBookAlreadyExists) {

      throw new AppError("This book already exists")
    }

    const newBook = this
      .bookRepository
      .create(bookName, pages,
        description, author, name, lastName, smallDescription);

    return newBook;
  }
}