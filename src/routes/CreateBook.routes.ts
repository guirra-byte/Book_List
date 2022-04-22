import { response, Router } from 'express'
const bookRoutes = Router()

import { bookController } from '../useCases/CreateBookUseCase'
import { listController } from '../useCases/ListingBookUseCase'
import { deleteController } from '../useCases/DeleteBookUseCase'


bookRoutes.post('/book', (request, response) => {

  bookController.handle(request, response)
})

bookRoutes.get('/', (request, response) => {

  listController.handle(request, response)

})

bookRoutes.delete('/book/:title', (request, response) => {

  deleteController.handle(request, response)
})

bookRoutes.patch('/book/:title', (request, response) => {

  const updateWhat = request.params.title
  const newValue = request.body

  let verifyBookAlreadyExists = books.find(book => updateWhat === book.title)

  if (verifyBookAlreadyExists) {
    verifyBookAlreadyExists.title = newValue

    return response
      .status(201)
      .send(verifyBookAlreadyExists)

  }

  return response
    .status(400)
    .json()



})

export { bookRoutes }