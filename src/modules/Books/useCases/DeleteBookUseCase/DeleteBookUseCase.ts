import { IBookRepository } from "../../../Books/repository/IBookRepository";

export class DeleteBookUseCase {

  constructor(private bookRepository: IBookRepository) { }
  execute(bookId: string) {

    const verifyBookExists = this.bookRepository.findOne(bookId)

    if (verifyBookExists) {

      const removeBook = this.bookRepository.remove(bookId)
      return removeBook
    }

    throw new Error("An uncreated book cannot be deleted")
  }
}