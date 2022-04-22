import { BookRepository } from "../../repository/implemetation/BookRepository";
import { CreateBookUseCase } from "./CreateBookUseCase";
import { CreateBookController } from "./CreateBookController";

const bookRepository = BookRepository.getInstance()

const bookUseCase = new CreateBookUseCase(bookRepository)

const bookController = new CreateBookController(bookUseCase)

export { bookController }