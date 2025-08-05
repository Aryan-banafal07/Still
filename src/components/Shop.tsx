import React, { useEffect, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, Heart } from 'lucide-react';

const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { products, loading: productsLoading } = useProducts();
  const { addToCart, loading: cartLoading } = useCart();

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

  const handleAddToCart = async (productId: string) => {
    const { error } = await addToCart(productId, 1);
    if (error) {
      alert(error);
    } else {
      alert('Added to cart!');
    }
  };

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
    ? product.images[currentImage] || product.images[0]
    : hovered
    ? product.images[1] || product.images[0]
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
        
        {/* Action buttons on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <button
              onClick={() => handleAddToCart(product.id)}
              disabled={cartLoading}
              className="bg-white text-black p-3 hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
            >
              <ShoppingCart size={20} />
            </button>
            <button className="bg-white text-black p-3 hover:bg-gray-100 transition-colors duration-300">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-light text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-700 text-base font-light">₹{product.price}</p>
        {product.stock_quantity <= 5 && product.stock_quantity > 0 && (
          <p className="text-orange-600 text-xs mt-1">Only {product.stock_quantity} left</p>
        )}
        {product.stock_quantity === 0 && (
          <p className="text-red-600 text-xs mt-1">Out of stock</p>
        )}
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

        {productsLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        )}

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
