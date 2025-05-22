const fs = require('fs');
const path = require('path');
const https = require('https');

const teamImages = [
  {
    id: 'founder',
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
    filename: 'founder.jpg'
  },
  {
    id: 'cofounder',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
    filename: 'cofounder.jpg'
  },
  {
    id: 'developer1',
    url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3',
    filename: 'developer1.jpg'
  },
  {
    id: 'developer2',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3',
    filename: 'developer2.jpg'
  },
  {
    id: 'developer3',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
    filename: 'developer3.jpg'
  },
  {
    id: 'sales1',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3',
    filename: 'sales1.jpg'
  },
  {
    id: 'sales2',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    filename: 'sales2.jpg'
  },
  {
    id: 'sales3',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
    filename: 'sales3.jpg'
  }
];

const outputDir = path.join(__dirname, 'public', 'team');

// Create directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Download images
teamImages.forEach(image => {
  const filePath = path.join(outputDir, image.filename);
  const file = fs.createWriteStream(filePath);
  
  https.get(`${image.url}&w=600&q=80`, response => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${image.filename}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${image.filename}: ${err.message}`);
  });
});
