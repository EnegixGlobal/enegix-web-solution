#!/bin/bash

# Define the paths
PUBLIC_DIR="./public"

# Define service images to create
SERVICE_IMAGES=("web-development.jpg" "logo-design.jpg" "seo-optimization.jpg" "digital-marketing.jpg" "ecommerce-solutions.jpg" "ppc-advertising.jpg")

# Check if the public directory exists
if [ ! -d "$PUBLIC_DIR" ]; then
  echo "Creating public directory..."
  mkdir -p "$PUBLIC_DIR"
fi

# Function to create a placeholder image using a solid color
create_placeholder_image() {
  local filename="$1"
  local color="$2"
  local width="$3"
  local height="$4"
  local text="$5"
  
  # Check if ImageMagick is installed
  if command -v convert &> /dev/null; then
    convert -size "${width}x${height}" xc:"$color" \
      -gravity Center -pointsize 40 -font Arial -fill white \
      -annotate 0 "$text" \
      "$PUBLIC_DIR/$filename"
    echo "Created placeholder image: $filename"
  else
    echo "ImageMagick not found. Cannot create $filename"
    # Create an empty file as a fallback
    touch "$PUBLIC_DIR/$filename"
  fi
}

# Create placeholder images for services
echo "Creating service placeholder images..."
create_placeholder_image "web-development.jpg" "#4F46E5" 800 600 "Web Development"
create_placeholder_image "logo-design.jpg" "#8B5CF6" 800 600 "Logo Design"
create_placeholder_image "seo-optimization.jpg" "#10B981" 800 600 "SEO Optimization"
create_placeholder_image "digital-marketing.jpg" "#F59E0B" 800 600 "Digital Marketing"
create_placeholder_image "ecommerce-solutions.jpg" "#EC4899" 800 600 "E-commerce Solutions"
create_placeholder_image "ppc-advertising.jpg" "#3B82F6" 800 600 "PPC Advertising"

echo "Done!"
