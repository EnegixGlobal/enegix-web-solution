// This script creates placeholder image files if they don't exist

import fs from 'fs';
import path from 'path';

// Define the paths
const PUBLIC_DIR = path.join(__dirname, 'public');

// Define service images to create
const SERVICE_IMAGES = [
  'web-development.jpg',
  'logo-design.jpg',
  'seo-optimization.jpg',
  'digital-marketing.jpg',
  'ecommerce-solutions.jpg',
  'ppc-advertising.jpg'
];

// Check if the public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  console.log('Creating public directory...');
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Function to create a placeholder file
function createPlaceholderFile(filename) {
  const filePath = path.join(PUBLIC_DIR, filename);
  
  // Check if file already exists
  if (!fs.existsSync(filePath)) {
    // Create an empty file
    fs.writeFileSync(filePath, '');
    console.log(`Created placeholder file: ${filename}`);
  } else {
    console.log(`File already exists: ${filename}`);
  }
}

// Create placeholder files for services
console.log('Creating service placeholder files...');
SERVICE_IMAGES.forEach(image => {
  createPlaceholderFile(image);
});

console.log('Done!');
