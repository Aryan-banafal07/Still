# Still Fashion Website - Download Guide

## How to Download and Set Up Locally

### 1. Download the Project Files
You can download this project in several ways:

#### Option A: Download as ZIP (Recommended)
1. Click the download button in your development environment
2. Extract the ZIP file to your desired location

#### Option B: Clone/Copy Files
1. Copy all project files to a new directory on your computer
2. Ensure you have all the files listed below

### 2. Required Files Structure
```
still-fashion-website/
├── public/
│   ├── images/          (will be created by download script)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Drops.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Login.tsx
│   │   ├── Lookbook.tsx
│   │   ├── Navigation.tsx
│   │   └── Shop.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── download-assets.js   (asset download script)
├── package.json
├── package-lock.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── postcss.config.js
├── eslint.config.js
└── index.html
```

### 3. Install Dependencies
```bash
# Navigate to project directory
cd still-fashion-website

# Install dependencies
npm install
```

### 4. Download Assets (Images)
```bash
# Run the asset download script
node download-assets.js
```

This will create the following folder structure and download all images:
```
public/
├── images/
│   ├── hero/
│   ├── products/
│   ├── lookbook/
│   ├── about/
│   ├── drops/
│   └── videos/
```

### 5. Update Image Paths (Optional)
If you want to use your own images, replace the files in the `public/images/` folders and update the paths in the components.

### 6. Add Product Videos
The current setup uses placeholder video URLs. To add your own videos:

1. Place your product videos in `public/videos/products/`
2. Update the video paths in `src/components/Shop.tsx`

Example:
```jsx
video: '/videos/products/essential-tee.mp4'
```

### 7. Run the Development Server
```bash
npm run dev
```

### 8. Build for Production
```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment.

## Customization Guide

### Replacing Images
1. **Hero Image**: Replace `public/images/hero/hero-main.jpg`
2. **Product Images**: Replace files in `public/images/products/`
3. **Lookbook Images**: Replace files in `public/images/lookbook/`
4. **About Image**: Replace `public/images/about/philosophy.jpg`
5. **Drops Images**: Replace files in `public/images/drops/`

### Adding Your Own Products
Edit `src/components/Shop.tsx` and update the `products` array with your own:
- Product names
- Prices
- Image paths
- Video paths
- Categories

### Customizing Colors/Fonts
Edit `src/index.css` and `tailwind.config.js` to customize:
- Color scheme
- Typography
- Spacing
- Animations

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Traditional hosting**: Upload `dist` folder contents

## Troubleshooting

### Images Not Loading
- Ensure images are in the correct `public/images/` folders
- Check that file names match exactly (case-sensitive)
- Verify image paths start with `/images/` not `./images/`

### Videos Not Playing
- Ensure videos are in MP4 format
- Check video paths in the Shop component
- Verify videos are optimized for web (H.264 codec recommended)

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run lint`
- Ensure all imported files exist

## Support
If you encounter any issues, check:
1. Node.js version (16+ recommended)
2. All dependencies are installed
3. File paths are correct
4. Images and videos are in the right formats

Happy coding! 🚀