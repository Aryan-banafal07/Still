import React, { useEffect, useState } from 'react';

const About = () => {
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
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Philosophy
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                In a world of constant noise, we believe in the power of stillness. 
                Our designs speak through silence, creating pieces that transcend 
                fleeting trends to become timeless essentials.
              </p>
              <p className="text-lg">
                Each garment is thoughtfully crafted with attention to detail, 
                sustainable materials, and a commitment to conscious consumption. 
                We create clothing that moves with you, adapts to your life, 
                and grows more beautiful with time.
              </p>
              <p className="text-lg">
                Still is more than a brand—it's a philosophy of intentional living, 
                where quality prevails over quantity, and every piece tells a story 
                of quiet confidence.
              </p>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <img 
              src="public\images\about\Lucid_Realism_A_soft_editorialstyle_fashion_photograph_A_young_1.jpg"
              alt="Still Philosophy"
              className="w-full h-[600px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;