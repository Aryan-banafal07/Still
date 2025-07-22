import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('shop');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      name: 'Essential Tee',
      price: '$85',
      images: [
        '/images/products/1stback-min.jpeg',
    '/images/products/1stfront-min.jpeg',
  ],
  category: 'Basics'
},
{
  id: 2,
  name: 'Relaxed Tee',
  price: '$185',
  images: [
    '/images/products/2ndback-min.png',
    '/images/products/2ndfront-min.png',
  ],
  category: 'Basics'
},
{
  id: 3,
  name: 'Oversized Tee',
  price: '$285',
  images: [
    '/images/products/3rdback-min.png',
    '/images/products/3rdfront-min.png',
  ],
  category: 'Outerwear'
},
{
  id: 4,
  name: 'Minimal Dress',
  price: '$225',
  images: [
    '/images/products/4thback.jpeg',
    '/images/products/4thfront.jpeg',
    '/images/products/4thside.jpeg'
  ],
      category: 'Dresses'
    },
    {
      id: 5,
      name: 'Cashmere Sweater',
      price: '$385',
      images: [
        'https://images.pexels.com/photos/5480703/pexels-photo-5480703.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        'https://images.pexels.com/photos/5480862/pexels-photo-5480862.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        'https://images.pexels.com/photos/5480863/pexels-photo-5480863.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop'
      ],
      category: 'Knitwear'
    },
    {
      id: 6,
      name: 'Wide Leg Pants',
      price: '$225',
      images: [
        'https://images.pexels.com/photos/5480704/pexels-photo-5480704.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        'https://images.pexels.com/photos/5480864/pexels-photo-5480864.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        'https://images.pexels.com/photos/5480865/pexels-photo-5480865.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop'
      ],
      category: 'Bottoms'
    },
    {
      id: 7,
      name: 'Silk Blouse',
      price: '$195',
      images: [
        'https://images.pexels.com/photos/5480705/pexels-photo-5480705.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        'https://images.pexels.com/photos/5480866/pexels-photo-5480866.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        'https://images.pexels.com/photos/5480867/pexels-photo-5480867.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop'
      ],
      category: 'Tops'
    },
    {
      id: 8,
      name: 'Wool Coat',
      price: '$485',
      images: [
        'https://images.pexels.com/photos/5480706/pexels-photo-5480706.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        'https://images.pexels.com/photos/5480868/pexels-photo-5480868.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
        'https://images.pexels.com/photos/5480869/pexels-photo-5480869.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop'
      ],
      category: 'Outerwear'
    }
  ];

  const ProductCard = ({ product, index }: { product: any; index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
      let interval: NodeJS.Timeout;
      
      if (isHovered) {
        // Start cycling through images immediately on hover
        interval = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        }, 800);

        // Show video after cycling through all images once
        const videoTimer = setTimeout(() => {
          setShowVideo(true);
        }, product.images.length * 800);

        return () => {
          clearInterval(interval);
          clearTimeout(videoTimer);
        };
      } else {
        // Reset to first image when not hovering
        setCurrentImageIndex(0);
        setShowVideo(false);
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }, [isHovered, product.images.length]);

    return (
      <div 
        className={`group cursor-pointer transition-all duration-1000 bg-white hover:shadow-2xl ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          {/* Images */}
          <div className="relative w-full h-80 lg:h-96">
            {product.images.map((image: string, imgIndex: number) => (
              <img 
                key={imgIndex}
                src={image}
                alt={`${product.name} - View ${imgIndex + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  currentImageIndex === imgIndex && !showVideo
                    ? 'opacity-100 translate-x-0' 
                    : currentImageIndex === imgIndex && !showVideo
                    ? 'opacity-0 translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
                style={{
                  transform: currentImageIndex === imgIndex && !showVideo 
                    ? 'translateX(0)' 
                    : currentImageIndex < imgIndex 
                    ? 'translateX(100%)' 
                    : 'translateX(-100%)'
                }}
              />
            ))}
            
            {/* Video */}
            {showVideo && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                style={{ opacity: showVideo ? 1 : 0 }}
              >
                <source src={product.video} type="video/mp4" />
              </video>
            )}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
          
          {/* Quick Shop Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button className="bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-2 text-sm font-light hover:bg-white transition-colors duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0">
              Quick Shop
            </button>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 text-xs uppercase tracking-wide font-light">
              {product.category}
            </span>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-4 flex space-x-1">
            {product.images.map((_: any, imgIndex: number) => (
              <div
                key={imgIndex}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  currentImageIndex === imgIndex && !showVideo
                    ? 'bg-white' 
                    : 'bg-white/40'
                }`}
              />
            ))}
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                showVideo ? 'bg-white' : 'bg-white/40'
              }`}
            />
          </div>
        </div>
        
        <div className="p-6 space-y-3">
          <h3 className="font-light text-lg text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-700 font-light text-lg">
            {product.price}
          </p>
          <div className="pt-2">
            <div className="w-full h-px bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="shop" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Current Drop
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully curated pieces that embody our philosophy of timeless design 
            and conscious craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="px-12 py-4 border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500 font-light text-lg">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;