import { Request, response, Response } from 'express'
import { CreateBookUseCase } from './CreateBookUseCase'

export class CreateBookController {

  constructor(private bookUseCase: CreateBookUseCase) { }

  handle(request: Request, response: Response): Response {

    const { bookName, pages, description, author, name, lastName, smalldescription, bookId } = request.body

    try {

      const book = this.bookUseCase.execute(bookName, pages, description, author, name, lastName, smalldescription, bookId)
      return response.status(201).json(book)

    } catch (exception) {
      return response.status(400).json(`${exception}`)
    }


  }
}