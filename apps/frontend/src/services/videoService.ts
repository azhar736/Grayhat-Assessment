// src/services/videoService.ts
import axios from 'axios';
import { VideoResponse } from '../types';

const uploadVideo = async (file: File): Promise<VideoResponse> => {
  const formData = new FormData();
  formData.append('video', file);
  const response = await axios.post<VideoResponse>('/api/videos/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

const getLatestVideo = async (): Promise<string> => {
  const response = await axios.get('/api/videos/latest', {
    responseType: 'blob',
  });
  return URL.createObjectURL(response.data);
};

export const videoService = {
  uploadVideo,
  getLatestVideo,
};
