import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import {
  PUBLIC_READ,
  MULTIPART_FILE_NAME,
  MAX_UPLOAD_COUNT,
} from '../constants/multer-constants';
import configureDotEnv from './dotenv-loader';

configureDotEnv();

const {
  AWS_ACCESS_KEY_ID: accessKeyId,
  AWS_SECRET_KEY: secretAccessKey,
  SPACES_ENDPOINT,
  SPACES_BUCKET: bucket,
} = process.env;

aws.config.update({
  accessKeyId,
  secretAccessKey,
});

const endpoint = new aws.Endpoint(SPACES_ENDPOINT);

const s3 = new aws.S3({ endpoint });

const upload = multer({
  storage: multerS3({
    s3,
    bucket,
    acl: PUBLIC_READ,
    key: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
}).array(MULTIPART_FILE_NAME, MAX_UPLOAD_COUNT);

export default upload;
