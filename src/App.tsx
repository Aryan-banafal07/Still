import React from 'react';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Drops from './components/Drops';
import Shop from './components/Shop';
import Lookbook from './components/Lookbook';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (currentPage === 'login') {
    return (
      <Login 
        onBack={() => setCurrentPage('home')}
        onLogin={() => {
          setIsLoggedIn(true);
          setCurrentPage('home');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        onLoginClick={() => setCurrentPage('login')}
        isLoggedIn={isLoggedIn}
        onLogout={() => setIsLoggedIn(false)}
      />
      <Hero />
      <About />
      <Drops />
      <Shop />
      <Lookbook />
      <Footer />
    </div>
  );
}

export default App;