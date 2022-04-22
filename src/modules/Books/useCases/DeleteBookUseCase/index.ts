import { BookRepository } from "../../repository/implemetation/BookRepository";
import { DeleteBookUseCase } from "./DeleteBookUseCase";
import { DeleteBookController } from "./DeleteBookController";

const bookRepository = BookRepository.getInstance()

const deleteUseCase = new DeleteBookUseCase(bookRepository)

const deleteController = new DeleteBookController(deleteUseCase)

export { deleteController }