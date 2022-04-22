import { DeleteBookUseCase } from "./DeleteBookUseCase";
import { Request, response, Response } from 'express'

export class DeleteBookController {

  constructor(private deleteUseCase: DeleteBookUseCase) { }
  handle(request: Request, response: Response) {

    const { name } = request.body

    try {
      const deleteBook = this.deleteUseCase.execute(name)
      return response.status(201).json(`The book ${deleteBook} as deleted`)

    } catch (exception) {
      return response.status(400).json(`${exception}`)
    }
  }
}