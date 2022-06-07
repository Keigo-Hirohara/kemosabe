import express from 'express';
import { index } from './routes/index';

const PORT = process.env.POET || 5000;

const app = express();

app.set('view engine', 'html');

app.use('/', index);

app.listen(PORT, () => {
  console.log(`Server is runnning on PORT: ${PORT}`);
});
