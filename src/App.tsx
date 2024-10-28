import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AlumniSpotlight from './components/AlumniSpotlight';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} />
      <main className="pt-16">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
            <AlumniSpotlight />
          </>
        ) : currentPage === 'profile' ? (
          <ProfilePage />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;