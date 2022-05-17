import { Router } from 'express';

import { createUserController } from '../modules/User/useCases/CreateUser';
import { verifyUserAlreadyExists } from '../Middlewares/User/VerifyUserAlreadyExists';
import { verifyUserAuthToken } from '../Middlewares/Token/Auth/VerifyUserAuthToken';

const userRoutes = Router();

userRoutes.post('/', verifyUserAlreadyExists, verifyUserAuthToken, (request, response) => {

  return createUserController
    .handle(request, response);
})

export { userRoutes };