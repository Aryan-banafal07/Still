const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories
const dirs = [
  'public/images/hero',
  'public/images/products',
  'public/images/lookbook',
  'public/images/about',
  'public/images/drops',
  'public/videos/products'
];

dirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

// Function to download file
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Assets to download
const assets = [
  // Hero
  {
    url: 'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    path: 'public/images/hero/hero-main.jpg'
  },
  
  // About
  {
    url: 'https://images.pexels.com/photos/5480694/pexels-photo-5480694.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
    path: 'public/images/about/philosophy.jpg'
  },
  
  // Drops
  {
    url: 'https://images.pexels.com/photos/5480700/pexels-photo-5480700.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    path: 'public/images/drops/spring-essentials.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480701/pexels-photo-5480701.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    path: 'public/images/drops/minimal-luxe.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480702/pexels-photo-5480702.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    path: 'public/images/drops/urban-quiet.jpg'
  },
  
  // Products - Essential Tee
  {
    url: 'https://images.pexels.com/photos/5480849/pexels-photo-5480849.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/essential-tee-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480850/pexels-photo-5480850.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/essential-tee-2.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480851/pexels-photo-5480851.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/essential-tee-3.jpg'
  },
  
  // Products - Relaxed Trousers
  {
    url: 'https://images.pexels.com/photos/5480697/pexels-photo-5480697.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/relaxed-trousers-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480852/pexels-photo-5480852.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/relaxed-trousers-2.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480853/pexels-photo-5480853.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/relaxed-trousers-3.jpg'
  },
  
  // Products - Oversized Blazer
  {
    url: 'https://images.pexels.com/photos/5480698/pexels-photo-5480698.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/oversized-blazer-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480858/pexels-photo-5480858.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/oversized-blazer-2.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480859/pexels-photo-5480859.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/oversized-blazer-3.jpg'
  },
  
  // Products - Minimal Dress
  {
    url: 'https://images.pexels.com/photos/5480699/pexels-photo-5480699.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/minimal-dress-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480860/pexels-photo-5480860.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/minimal-dress-2.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480861/pexels-photo-5480861.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/minimal-dress-3.jpg'
  },
  
  // Products - Cashmere Sweater
  {
    url: 'https://images.pexels.com/photos/5480703/pexels-photo-5480703.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/cashmere-sweater-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480862/pexels-photo-5480862.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/cashmere-sweater-2.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480863/pexels-photo-5480863.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/cashmere-sweater-3.jpg'
  },
  
  // Products - Wide Leg Pants
  {
    url: 'https://images.pexels.com/photos/5480704/pexels-photo-5480704.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/wide-leg-pants-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480864/pexels-photo-5480864.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/wide-leg-pants-2.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480865/pexels-photo-5480865.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/wide-leg-pants-3.jpg'
  },
  
  // Products - Silk Blouse
  {
    url: 'https://images.pexels.com/photos/5480705/pexels-photo-5480705.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/silk-blouse-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480866/pexels-photo-5480866.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/silk-blouse-2.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480867/pexels-photo-5480867.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/silk-blouse-3.jpg'
  },
  
  // Products - Wool Coat
  {
    url: 'https://images.pexels.com/photos/5480706/pexels-photo-5480706.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/wool-coat-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480868/pexels-photo-5480868.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/wool-coat-2.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480869/pexels-photo-5480869.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    path: 'public/images/products/wool-coat-3.jpg'
  },
  
  // Lookbook
  {
    url: 'https://images.pexels.com/photos/5480854/pexels-photo-5480854.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
    path: 'public/images/lookbook/urban-minimalism.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480855/pexels-photo-5480855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    path: 'public/images/lookbook/quiet-moments.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480856/pexels-photo-5480856.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
    path: 'public/images/lookbook/timeless-elegance.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5480857/pexels-photo-5480857.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    path: 'public/images/lookbook/natural-light.jpg'
  }
];

// Download all assets
async function downloadAllAssets() {
  console.log('Starting asset download...');
  
  for (const asset of assets) {
    try {
      await downloadFile(asset.url, asset.path);
    } catch (error) {
      console.error(`Failed to download ${asset.path}:`, error.message);
    }
  }
  
  console.log('Asset download completed!');
  console.log('\nNext steps:');
  console.log('1. Update the image paths in your components to use local paths');
  console.log('2. Replace placeholder videos with your actual product videos');
  console.log('3. Run "npm run build" to create production build');
}

downloadAllAssets();