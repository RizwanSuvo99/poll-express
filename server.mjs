import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import {
  createPollGetController,
  createPollPostController,
  getAllPolls,
  viewPollGetController,
  viewPollPostController,
} from './pollController.mjs';

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/create', createPollGetController);
app.post('/create', createPollPostController);
app.get('/polls', getAllPolls);
app.get('/polls/:id', viewPollGetController);
app.post('/polls/:id/vote', viewPollPostController);

app.get('/', (req, res) => {
  res.render('home');
});

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
