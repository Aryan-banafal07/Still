import React, { useEffect, useState } from 'react';

const Journal = () => {
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

    const element = document.getElementById('journal');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      id: 1,
      title: 'The Art of Slow Fashion',
      excerpt: 'Exploring the beauty of intentional design and sustainable practices in contemporary fashion.',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/5480863/pexels-photo-5480863.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Minimalism as a Way of Life',
      excerpt: 'How embracing less can lead to more meaningful experiences and deeper connections.',
      date: 'March 8, 2024',
      image: 'https://images.pexels.com/photos/5480864/pexels-photo-5480864.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Crafting Timeless Pieces',
      excerpt: 'Behind the scenes of our design process and the stories woven into each garment.',
      date: 'March 1, 2024',
      image: 'https://images.pexels.com/photos/5480865/pexels-photo-5480865.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="journal" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Journal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts on design, sustainability, and the philosophy of quiet living. 
            Stories that inspire and inform our creative journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-gray-500 font-light">
                  {article.date}
                </p>
                <h3 className="font-serif text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 border-b border-gray-300 group-hover:border-gray-500">
                    Read more
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;