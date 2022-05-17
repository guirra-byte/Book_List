import { response, Router } from 'express';
const bookRoutes = Router();

import { bookController } from '../modules/Books/useCases/CreateBookUseCase';
import { listController } from '../modules/Books/useCases/ListingBookUseCase';
import { deleteController } from '../modules/Books/useCases/DeleteBookUseCase';


bookRoutes.post('/book', (request, response) => {

  return bookController
    .handle(request, response);
});

bookRoutes.get('/', (request, response) => {

  return listController
    .handle(request, response);

});

bookRoutes.delete('/book/:title', (request, response) => {

  return deleteController
    .handle(request, response);
});

// bookRoutes.patch('/book/:title', (request, response) => {

//   const updateWhat = request.params.title
//   const newValue = request.body

//   let verifyBookAlreadyExists = books.find(book => updateWhat === book.title)

//   if (verifyBookAlreadyExists) {
//     verifyBookAlreadyExists.title = newValue

//     return response
//       .status(201)
//       .send(verifyBookAlreadyExists)

//   }

//   return response
//     .status(400)
//     .json()



// })

export { bookRoutes }