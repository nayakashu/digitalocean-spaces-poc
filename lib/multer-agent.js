import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import {
  PUBLIC_READ,
  MULTIPART_FILE_NAME,
  MAX_UPLOAD_COUNT,
} from '../constants/multer-constants';

const endpoint = new aws.Endpoint('ams3.digitaloceanspaces.com');

const s3 = new aws.S3({ endpoint });

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'studex-staging',
    acl: PUBLIC_READ,
    key: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
}).array(MULTIPART_FILE_NAME, MAX_UPLOAD_COUNT);

export default upload;
