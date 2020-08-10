import express, { response } from 'express';
import upload from '../lib/multer-agent';

const router = express.Router();

router.post('/upload', (req, res, next) => {
  upload(req, res, (error) => {
    if (error) {
      console.log(error);
      return res.redirect('/error');
    }

    console.log('File uploaded successfully');
    res.redirect('/success');
  });
});

export default router;
