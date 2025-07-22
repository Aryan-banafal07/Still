import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('shop');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      name: 'Essential Tee',
      price: 'Rs. 1499',
      images: [
        '/images/products/1stback-min.jpeg',
        '/images/products/1stfront-min.jpeg'
      ],
      category: 'Basics'
    },
    {
      id: 2,
      name: 'Relaxed Tee',
      price: 'Rs. 1499',
      images: [
        '/images/products/2ndback-min.png',
        '/images/products/2ndfront-min.png'
      ],
      category: 'Basics'
    },
    {
      id: 3,
      name: 'Oversized Tee',
      price: 'Rs. 1299',
      images: [
        '/images/products/3rdback-min.png',
        '/images/products/3rdfront-min.png'
      ],
      category: 'Outerwear'
    },
    {
      id: 4,
      name: 'Minimal Dress',
      price: '$225',
      images: [
        '/images/products/4thback.jpeg',
        '/images/products/4thfront.jpeg'
      ],
      category: 'Dresses'
    }
  ];

  const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev === 0 ? 1 : 0));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const displayedImage = isMobile
    ? product.images[currentImage]
    : hovered
    ? product.images[1]
    : product.images[0];

  return (
    <div
      className={`group bg-white transition-all duration-1000 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-96 sm:h-80 md:h-96 overflow-hidden">
        <img
          src={displayedImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 text-xs uppercase font-light text-gray-700">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-light text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-700 text-base font-light">{product.price}</p>
      </div>
    </div>
  );
};


  return (
    <section id="shop" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Current Drop
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully curated pieces that embody our philosophy of timeless design 
            and conscious craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="px-10 py-3 border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-light text-lg">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
