// src/middleware/fileUpload.ts
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const uploadsDir = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));// You can replace 'uploads/' with your desired destination
  },
  filename: (req, file, cb) => {
    // You can use any filename strategy you like
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // You can add file filtering logic here if needed
  cb(null, true);
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

