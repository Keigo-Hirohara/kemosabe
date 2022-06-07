import express from 'express';

export const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  res.send('this is a /login page!');
});

authRouter.get('/signup', (req, res) => {
  res.send('this is a /signup page!');
});
