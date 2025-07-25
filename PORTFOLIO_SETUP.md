# Environment Variables for Portfolio Management

Add these environment variables to your `.env.local` file:

## Cloudinary Configuration
```
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

## How to get Cloudinary credentials:

1. Go to [Cloudinary](https://cloudinary.com) and create an account
2. Go to your Dashboard
3. Copy the following values:
   - Cloud Name
   - API Key  
   - API Secret

## Database Configuration
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Complete .env.local file example:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
JWT_SECRET=your-super-secret-jwt-key-here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Features Implemented:

### ✅ Backend:
- Portfolio model with comprehensive fields
- CRUD API routes for portfolio management
- Cloudinary integration for image uploads
- Image optimization and compression
- Error handling and validation
- Admin authentication middleware

### ✅ Frontend:
- Admin dashboard with portfolio management
- Portfolio creation/editing form with drag-and-drop uploads
- Portfolio listing with search, filters, and pagination
- Image preview and management
- Tag and technology management
- Stats tracking
- Responsive design

### ✅ Database:
- MongoDB schema with proper indexing
- Status management (active, inactive, draft)
- Featured project support
- Meta fields for SEO
- Audit trails (created/updated by)

### ✅ Security:
- JWT token authentication
- File type validation
- File size limits
- Image optimization
- Error handling

### ✅ UX Features:
- Real-time image previews
- Drag and drop upload
- Comprehensive filtering
- Search functionality
- Category management
- Mobile responsive design
- Loading states and error handling
- Toast notifications

The portfolio data is now completely dynamic and managed through the admin panel. The frontend automatically fetches data from the API instead of using static data.
