"use client";

import { useState } from 'react';

interface UploadResponse {
  message: string;
  url: string;
  publicId: string;
}

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result: UploadResponse = await response.json();
        setUploadedUrl(result.url);
        console.log('Upload successful:', result);
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
      
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {file && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">Selected: {file.name}</p>
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="mt-2 max-w-full h-32 object-cover rounded"
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {uploadedUrl && (
        <div className="mt-4">
          <p className="text-sm text-green-600">Upload successful!</p>
          <img
            src={uploadedUrl}
            alt="Uploaded"
            className="mt-2 max-w-full h-32 object-cover rounded"
          />
          <p className="text-xs text-gray-500 mt-1 break-all">{uploadedUrl}</p>
        </div>
      )}
    </div>
  );
}
