import express from 'express';
import path from 'path';

const router = express.Router();

const pathConfig = { root: path.join(__dirname, '../public') };

router.get('/', (req, res) => {
  res.sendFile('index.html', pathConfig);
});

router.get('/success', (req, res) => {
  res.sendFile('success.html', pathConfig);
});

router.get('/error', (req, res) => {
  res.sendFile('error.html', pathConfig);
});

export default router;
