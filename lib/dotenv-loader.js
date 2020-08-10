import dotenv from 'dotenv';
import { PRODUCTION } from '../constants/environment';

const configureDotEnv = () =>
  dotenv.config({ silent: process.env.NODE_ENV === PRODUCTION });

export default configureDotEnv;
