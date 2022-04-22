import { Request, Response } from 'express'
import { ListBookUseCase } from './ListBookUseCase'

export class ListBookController {

  constructor(private listBookUseCase: ListBookUseCase) { }

  handle(request: Request, response: Response): Response {

    try {

      const listingBook = this.listBookUseCase.execute()
      return response.status(201).json(listingBook)

    } catch (exception) {

      return response.status(400).json(`${exception}`)
    }
  }
}