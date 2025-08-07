import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname ,'úploads' );

const storage = multer.diskStorage({
  
    destination: function (req, file, cb) {
      cb(null, '../uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-')+file.originalname)
    },
  
  })
  
  export  const  upload = multer({ storage: storage })