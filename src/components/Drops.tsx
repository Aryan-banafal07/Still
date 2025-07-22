import React, { useEffect, useState } from 'react';

const Drops = () => {
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

    const element = document.getElementById('drops');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const drops = [
    {
      id: 1,
      name: 'Spring Essentials',
      description: 'Timeless pieces for the new season',
      image: '/images/drops/spring-essentials.jpg',
      status: 'Available Now',
      pieces: '12 pieces'
    },
    {
      id: 2,
      name: 'Minimal Luxe',
      description: 'Elevated basics in premium fabrics',
      image: '/images/drops/lux.jpg',
      status: 'Coming Soon',
      pieces: '8 pieces'
    },
    {
      id: 3,
      name: 'Studio Session',
      description: 'As if it came straight out of an artist’s private world.',
      image: '/images/drops/artist.jpg',
      status: 'Pre-Order',
      pieces: '15 pieces'
    }
  ];

  return (
    <section id="drops" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Drops
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated collections that define each season. Limited releases 
            crafted with intention and designed to last.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {drops.map((drop, index) => (
            <div 
              key={drop.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={drop.image}
                  alt={drop.name}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 text-xs uppercase tracking-wide font-light ${
                    drop.status === 'Available Now' 
                      ? 'bg-green-100 text-green-800' 
                      : drop.status === 'Coming Soon'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {drop.status}
                  </span>
                </div>

                {/* Pieces Count */}
                <div className="absolute bottom-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 text-xs uppercase tracking-wide font-light">
                    {drop.pieces}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                  {drop.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {drop.description}
                </p>
                <div className="pt-4">
                  <button className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 border-b border-gray-300 hover:border-gray-700 pb-1">
                    {drop.status === 'Available Now' ? 'Shop Now' : drop.status === 'Coming Soon' ? 'Notify Me' : 'Pre-Order'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drops;