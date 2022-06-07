import express from 'express';

export const messageRouter = express.Router();

messageRouter.get('/message/:id...:id', (req, res) => {
  res.send('this is message end point!');
});
