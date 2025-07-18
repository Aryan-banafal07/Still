import React, { useEffect, useState } from 'react';

const Lookbook = () => {
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

    const element = document.getElementById('lookbook');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const lookbookImages = [
    {
      id: 1,
      image: '/images/lookbook/urban-minimalism.jpg',
      title: 'Urban Minimalism',
      description: 'Clean lines meet city living'
    },
    {
      id: 2,
      image: '/images/lookbook/quiet-moments.jpg',
      title: 'Quiet Moments',
      description: 'Finding peace in simplicity'
    },
    {
      id: 3,
      image: '/images/lookbook/timeless-elegance.jpg',
      title: 'Timeless Elegance',
      description: 'Effortless sophistication'
    },
    {
      id: 4,
      image: '/images/lookbook/natural-light.jpg',
      title: 'Natural Light',
      description: 'Beauty in the everyday'
    }
  ];

  return (
    <section id="lookbook" className="py-20 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Lookbook
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visual stories that capture the essence of still living. 
            Each image reflects our commitment to quiet luxury and timeless style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Large Image */}
          <div className={`lg:col-span-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="group relative overflow-hidden h-96 lg:h-[600px]">
              <img 
                src={lookbookImages[0].image}
                alt={lookbookImages[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-6">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl mb-2">{lookbookImages[0].title}</h3>
                  <p className="text-sm">{lookbookImages[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Images */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="group relative overflow-hidden h-48 lg:h-72">
                <img 
                  src={lookbookImages[1].image}
                  alt={lookbookImages[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-6">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-lg mb-1">{lookbookImages[1].title}</h3>
                    <p className="text-sm">{lookbookImages[1].description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="group relative overflow-hidden h-48 lg:h-72">
                  <img 
                    src={lookbookImages[2].image}
                    alt={lookbookImages[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-serif text-base mb-1">{lookbookImages[2].title}</h3>
                      <p className="text-xs">{lookbookImages[2].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="group relative overflow-hidden h-48 lg:h-72">
                  <img 
                    src={lookbookImages[3].image}
                    alt={lookbookImages[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-serif text-base mb-1">{lookbookImages[3].title}</h3>
                      <p className="text-xs">{lookbookImages[3].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;