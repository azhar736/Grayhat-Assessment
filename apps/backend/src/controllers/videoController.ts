// src/controllers/uploadController.ts
import { Request, Response } from 'express';
import { applyWatermark } from '../utils/watermark';
import path from 'path';
import fs from 'fs';
const outputDir = path.join(__dirname, '..', 'output');
console.log("The OutPut is,,,", outputDir);
export const uploadVideo = async (req: Request, res: Response) => {
  const watermarkText = req.body.watermarkText || 'Test Watermark';
  if (req.file) {
    const inputPath = req.file.path;
    const outputPath = `${outputDir}/${req.file.filename}-watermarked.mp4`;
    try {
      const watermarkedVideoPath = await applyWatermark(inputPath, outputPath, watermarkText);
      res.status(201).json({ message: 'Video processed successfully', path: watermarkedVideoPath });
    } catch (error) {
      res.status(500).json({ message: 'Error processing video', error });
    }
  } else {
    res.status(400).send('No video file uploaded.');
  }
};

export const getVideo = async (req: Request, res: Response) => {
  const videoDirPath = path.join(__dirname, "..", "output");

  fs.readdir(videoDirPath, (err, files) => {
    if (err) {
      console.error("An error occurred reading the directory", err);
      res.sendStatus(500);
      return;
    }

    const videoFiles = files.filter(file => file.endsWith('.mp4')); // Assuming videos are mp4
    if (videoFiles.length === 0) {
      res.status(404).send('No videos found');
      return;
    }

    const videoName = videoFiles[0]; // Select the first video found
    const videoPath = path.join(videoDirPath, videoName);

    fs.stat(videoPath, (err, stats) => {
      if (err) {
        console.error("An error occurred ", err);
        res.sendStatus(404);
        return;
      }

      const { range } = req.headers;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] 
          ? parseInt(parts[1], 10)
          : stats.size - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, {start, end});
        const head = {
          'Content-Range': `bytes ${start}-${end}/${stats.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          'Content-Length': stats.size,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
      }
    });
  });
};
