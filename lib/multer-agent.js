import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

const endpoint = new aws.Endpoint('ams3.digitaloceanspaces.com');

const s3 = new aws.S3({ endpoint });

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'studex-staging',
    acl: 'public-read',
    key: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
}).array('upload', 1);

export default upload;
