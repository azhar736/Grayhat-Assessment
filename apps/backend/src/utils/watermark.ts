import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
export const applyWatermark = (
  inputPath: string,
  outputPath: string,
  watermarkText: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Ensure the output directory exists or create it
    console.log("output path is>>>", outputPath);
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Escape single quotes by replacing them with '\\\''
    const safeWatermarkText = watermarkText.replace(/'/g, "\\\\'");
    const drawtext =
      `drawtext=text='${safeWatermarkText}':` +
      `fontcolor=white@0.5:fontsize=48:` +
      `x=(w-tw)/2:y=(h-th)/2`;

    ffmpeg(inputPath)
      .outputOptions("-vf", drawtext)
      .on("end", () => {
        console.log("Watermark applied successfully");
        console.log(`Check the file at: ${outputPath}`); // Log the full path to the file
        // Check if the file exists
        if (fs.existsSync(outputPath)) {
          console.log("Confirmed the file exists.");
        } else {
          console.log("However, the file does not exist.");
        }
        resolve(outputPath);
      })
      .on("error", (err) => {
        console.error("Error applying watermark:", err.message);
        reject(err);
      })
      .save(outputPath);
  });
};
