import express from 'express';

import { authRouter } from './auth';
import { userRouter } from './user';
import { messageRouter } from './message';

export const index = express.Router();

index.use('/auth', authRouter);

index.use('/user', userRouter);

index.use('message', messageRouter);
