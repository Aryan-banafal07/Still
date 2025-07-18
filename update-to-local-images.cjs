const fs = require('fs');
const path = require('path');

// File mappings for updating image paths
const fileUpdates = [
  {
    file: 'src/components/Hero.tsx',
    updates: [
      {
        from: 'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        to: '/images/hero/hero-main.jpg'
      }
    ]
  },
  {
    file: 'src/components/About.tsx',
    updates: [
      {
        from: 'https://images.pexels.com/photos/5480694/pexels-photo-5480694.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
        to: '/images/about/philosophy.jpg'
      }
    ]
  },
  {
    file: 'src/components/Drops.tsx',
    updates: [
      {
        from: 'https://images.pexels.com/photos/5480700/pexels-photo-5480700.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        to: '/images/drops/spring-essentials.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480701/pexels-photo-5480701.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        to: '/images/drops/minimal-luxe.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480702/pexels-photo-5480702.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        to: '/images/drops/urban-quiet.jpg'
      }
    ]
  },
  {
    file: 'src/components/Shop.tsx',
    updates: [
      // Essential Tee
      {
        from: 'https://images.pexels.com/photos/5480849/pexels-photo-5480849.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        to: '/images/products/essential-tee-1.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480850/pexels-photo-5480850.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        to: '/images/products/essential-tee-2.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480851/pexels-photo-5480851.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        to: '/images/products/essential-tee-3.jpg'
      },
      // Relaxed Trousers
      {
        from: 'https://images.pexels.com/photos/5480697/pexels-photo-5480697.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        to: '/images/products/relaxed-trousers-1.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480852/pexels-photo-5480852.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        to: '/images/products/relaxed-trousers-2.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480853/pexels-photo-5480853.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        to: '/images/products/relaxed-trousers-3.jpg'
      },
      // Add all other product image updates...
      // Videos
      {
        from: 'https://videos.pexels.com/video-files/5319735/5319735-hd_1080_1920_30fps.mp4',
        to: '/videos/products/essential-tee.mp4'
      },
      {
        from: 'https://videos.pexels.com/video-files/5319736/5319736-hd_1080_1920_30fps.mp4',
        to: '/videos/products/relaxed-trousers.mp4'
      }
      // Add all other video updates...
    ]
  },
  {
    file: 'src/components/Lookbook.tsx',
    updates: [
      {
        from: 'https://images.pexels.com/photos/5480854/pexels-photo-5480854.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
        to: '/images/lookbook/urban-minimalism.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480855/pexels-photo-5480855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        to: '/images/lookbook/quiet-moments.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480856/pexels-photo-5480856.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
        to: '/images/lookbook/timeless-elegance.jpg'
      },
      {
        from: 'https://images.pexels.com/photos/5480857/pexels-photo-5480857.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
        to: '/images/lookbook/natural-light.jpg'
      }
    ]
  }
];

function updateImagePaths() {
  console.log('Updating image paths to local references...');
  
  fileUpdates.forEach(({ file, updates }) => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      updates.forEach(({ from, to }) => {
        content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
      });
      
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`File not found: ${file}`);
    }
  });
  
  console.log('Image path updates completed!');
}

// Run the update
updateImagePaths();