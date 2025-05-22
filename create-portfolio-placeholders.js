// This script creates placeholder image files for the portfolio if they don't exist



import fs from 'fs';
import path from 'path';

// Define the paths
const PUBLIC_DIR = path.join(__dirname, 'public');
const PORTFOLIO_DIR = path.join(PUBLIC_DIR, 'portfolio');

// Create portfolio directory if it doesn't exist
if (!fs.existsSync(PORTFOLIO_DIR)) {
  console.log('Creating portfolio directory...');
  fs.mkdirSync(PORTFOLIO_DIR, { recursive: true });
}

// Define portfolio images to create
const PORTFOLIO_IMAGES = [
  'healthier-you.jpg',
  'healthier-you-1.jpg',
  'healthier-you-2.jpg',
  'healthier-you-3.jpg',
  'urban-taste.jpg',
  'urban-taste-1.jpg',
  'urban-taste-2.jpg',
  'urban-taste-3.jpg',
  'echo-studios.jpg',
  'echo-studios-1.jpg',
  'echo-studios-2.jpg',
  'echo-studios-3.jpg',
  'terra-realty.jpg',
  'terra-realty-1.jpg',
  'terra-realty-2.jpg',
  'terra-realty-3.jpg',
  'fit-gear.jpg',
  'pulse-marketing.jpg',
  'nova-coffee.jpg',
  'tech-summit.jpg',
  'green-planet.jpg'
];

// Function to create a placeholder file
function createPlaceholderFile(filename) {
  const filePath = path.join(PORTFOLIO_DIR, filename);
  
  // Check if file already exists
  if (!fs.existsSync(filePath)) {
    // Create an empty file
    fs.writeFileSync(filePath, '');
    console.log(`Created placeholder file: ${filename}`);
  } else {
    console.log(`File already exists: ${filename}`);
  }
}

// Create placeholder files for portfolio
console.log('Creating portfolio placeholder files...');
PORTFOLIO_IMAGES.forEach(image => {
  createPlaceholderFile(image);
});

console.log('Done!');
