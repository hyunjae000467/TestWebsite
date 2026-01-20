
import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Preview } from './components/Preview';
import { PreRegister } from './components/PreRegister';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Initialize with a random number between 3000 and 5000
  const [reservationCount, setReservationCount] = useState(0);

  useEffect(() => {
    const randomStart = Math.floor(Math.random() * 2001) + 3000;
    setReservationCount(randomStart);
  }, []);

  const handleRegisterClick = () => {
    // Increment visually just before redirecting
    setReservationCount(prev => prev + 1);
    window.open("https://forms.gle/KXX4G2THL194NyTW7", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Preview />
        <PreRegister 
          count={reservationCount} 
          onRegisterClick={handleRegisterClick}
        />
      </main>
      <footer className="bg-slate-900 border-t border-white/5 py-8">
        <Footer />
      </footer>
      <SpeedInsights />
    </div>
  );
};

export default App;
