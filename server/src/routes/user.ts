import express from 'express';

export const userRouter = express.Router();

userRouter.get('/:id', (req, res) => {
  res.send(`Shows ${req.params.id}'s profile page!`);
});

userRouter.post('/:id', (req, res) => {
  res.send(`This is ${req.params.id}'s edit request!`);
});
