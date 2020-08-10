import express from 'express';
import staticRoutes from './routes/static';
import uploadRoutes from './routes/upload';
import configureDotEnv from './lib/dotenv-loader';

configureDotEnv();

const app = express();

app.use(express.static('./public'));

app.use(staticRoutes);
app.use(uploadRoutes);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Hello People! from ${PORT}`));
