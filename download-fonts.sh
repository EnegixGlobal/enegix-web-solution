#!/bin/bash

# Set the fonts directory
FONTS_DIR="c:/Users/rajuv/Desktop/enegix-websolution-nextjs/public/fonts"

# Create the directory if it doesn't exist
mkdir -p "$FONTS_DIR"

# Download Clash Display fonts
curl -L "https://api.fontshare.com/v2/fonts/download/clash-display?f=ClashDisplay-Bold@woff2,ClashDisplay-Semibold@woff2,ClashDisplay-Medium@woff2,ClashDisplay-Regular@woff2,ClashDisplay-Light@woff2" -o clash-display.zip

# Download Satoshi fonts
curl -L "https://api.fontshare.com/v2/fonts/download/satoshi?f=Satoshi-Bold@woff2,Satoshi-Medium@woff2,Satoshi-Regular@woff2,Satoshi-Light@woff2" -o satoshi.zip

# Unzip the font files
unzip -o clash-display.zip -d "$FONTS_DIR"
unzip -o satoshi.zip -d "$FONTS_DIR"

# Clean up zip files
rm clash-display.zip satoshi.zip

echo "Fonts downloaded and extracted to $FONTS_DIR"
