import express from 'express';
import staticRoutes from './routes/static';
import uploadRoutes from './routes/upload';

const app = express();

app.use(express.static('public'));

app.use(staticRoutes);
app.use(uploadRoutes);

app.listen(3000, () => console.log('Hello World! @ 3000'));
