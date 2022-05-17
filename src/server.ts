import 'express-async-errors';
import { Request, Response, NextFunction } from 'express';

import { app } from "./app";
import { AppError } from "./Errors/AppError";

import { bookRoutes } from './routes/CreateBook.routes';
import { userRoutes } from './routes/CreateUser.routes';

app.use('/book', bookRoutes);
app.use('/', bookRoutes);

app.use(userRoutes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {

  if (error instanceof AppError) {

    return response
      .status(error.errorStatus)
      .json({ message: `${error.msg}` });
  }

  return response
    .status(500)
    .json({ message: `Internal Server error: ${error.message}` });
})

app.listen(3333, () => {
  console.log("O server já está rodando")
})