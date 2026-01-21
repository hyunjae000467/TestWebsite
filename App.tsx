
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Preview } from './components/Preview';
import { PreRegister } from './components/PreRegister';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NoticePopup } from './components/NoticePopup';

const App: React.FC = () => {
  const [reservationCount, setReservationCount] = useState(0);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  useEffect(() => {
    // Initialize reservation count
    const randomStart = Math.floor(Math.random() * 2001) + 3000;
    setReservationCount(randomStart);

    // Check if user dismissed the notice before
    const isDismissed = localStorage.getItem('restart_notice_dismissed');
    if (!isDismissed) {
      // Delay slightly for better UX
      const timer = setTimeout(() => setIsNoticeOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleRegisterClick = () => {
    setReservationCount(prev => prev + 1);
    window.open("https://forms.gle/KXX4G2THL194NyTW7", "_blank");
  };

  const openNotice = () => setIsNoticeOpen(true);
  const closeNotice = () => setIsNoticeOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNoticeClick={openNotice} />
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

      {isNoticeOpen && <NoticePopup onClose={closeNotice} />}
    </div>
  );
};

export default App;
