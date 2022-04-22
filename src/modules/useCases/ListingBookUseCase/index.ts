import { BookRepository } from "../../Books/repository/implemetation/BookRepository";
import { ListBookUseCase } from "./ListBookUseCase";
import { ListBookController } from "./ListBookController";

const bookRepository = BookRepository.getInstance()

const listUseCase = new ListBookUseCase(bookRepository)

const listController = new ListBookController(listUseCase)

export { listController }