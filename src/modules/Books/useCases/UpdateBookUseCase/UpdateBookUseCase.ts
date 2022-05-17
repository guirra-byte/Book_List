import { IBookRepository } from "../../repository/IBookRepository";
import { AppError } from "../../../../Errors/AppError";


export class UpdateBookUseCase {
  constructor(private bookRepository: IBookRepository) { }

  execute(name: string, forUpdate: string) {

    const verifyBook = this.bookRepository.findByName(name)

    if (!verifyBook) {

      throw new AppError("An uncreated book cannot be updated")
    }

    const updateBook = this.bookRepository.updateBook(forUpdate, verifyBook)
    return updateBook





  }
}