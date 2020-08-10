import express from 'express';
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import uploadRoutes from './routes/uploads';

const app = express();

app.use(express.static('public'));

app.use(uploadRoutes);

app.listen(3000, () => console.log('Hello World! @ 3000'));
