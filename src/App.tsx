import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
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
  const { user, loading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || authLoading) {
    return <LoadingScreen />;
  }

  if (currentPage === 'login') {
    return (
      <Login 
        onBack={() => setCurrentPage('home')}
        onLogin={() => {
          setCurrentPage('home');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        onLoginClick={() => setCurrentPage('login')}
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