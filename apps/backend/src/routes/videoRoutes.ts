import express from "express";
const router = express.Router();
import { getVideo, uploadVideo } from "../controllers/videoController";
import { upload } from "../middleware/fileUpload";

router.post("/upload", upload.single("video"), uploadVideo);
router.get("/latest", getVideo);

export default router;
