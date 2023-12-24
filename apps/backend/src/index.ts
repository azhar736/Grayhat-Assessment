import express from "express";
const app = express();
import videoRoutes from './routes/videoRoutes';
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/videos", videoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
