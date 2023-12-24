# Video Encoding Application

## Overview

This application provides a platform for users to upload videos, apply watermarks, and stream the processed videos. It features a React frontend with Tailwind CSS for styling and a Node.js backend utilizing Express and `fluent-ffmpeg` for video processing.

## Setup and Running Instructions

### Backend

The backend application handles the video processing tasks. To get it started Navigate to the backend directory and execute.

```bash
# Install dependencies
npm install

# Run in development mode with hot reload
npm run dev

# Build for production
npm run build

# Start the production server
npm start

```
The server will start on the defined port in the environment, defaulting to 8000. Make sure to have ffmpeg installed on your system for video processing features to work.

### Frontend
The frontend provides the user interface for uploading and streaming videos.Navigate to the frontend directory and execute
### Navigate to the frontend directory
cd path/to/frontend
```bash
# Install dependencies
npm install

# Serve with hot reload at localhost:3000
npm run dev

# Build for production with minification
npm run build

# Lint and fix files
npm run lint
npm run lint:fix
```
Open your web browser and go to the localhost address provided by Vite to view the frontend.

## Features
.Real-time video encoding and watermarking.
.Video streaming with support for partial content delivery.
.Intuitive user interface using React and Tailwind CSS.
.Type safety with TypeScript integration.