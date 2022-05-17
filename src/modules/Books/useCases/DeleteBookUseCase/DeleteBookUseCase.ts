import { IBookRepository } from "../../../Books/repository/IBookRepository";
import { AppError } from "../../../../Errors/AppError";

export class DeleteBookUseCase {

  constructor(private bookRepository: IBookRepository) { }
  execute(bookId: string) {

    const verifyBookExists = this
      .bookRepository
      .findOne(bookId);

    if (verifyBookExists) {

      const removeBook = this
        .bookRepository
        .remove(bookId);

      return removeBook;
    }

    throw new AppError("An uncreated book cannot be deleted", 404);
  }
}