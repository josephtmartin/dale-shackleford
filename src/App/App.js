import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import SideNav from '../components/SideNav';
import Bio from '../views/Bio';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Produced from '../views/Produced';
import Research from '../views/Research';
import EmailForm from '../components/EmailForm';
import Footer from '../components/Footer';
import './App.scss';

const routeBackgrounds = {
  '/': '/images/BLJ9226.jpg',
  '/bio': '/images/IMG_9059.jpg',
  '/production-engineering': '/images/IMG_7528.jpg',
  '/research': '/images/BLJ9223Cropped.jpg'
};

const routeBackgroundPositions = {
  '/': 'center',
  '/bio': 'center',
  '/production-engineering': 'center',
  '/research': 'center top'
};

function AppContent() {
  const location = useLocation();

  // Memoize the background image based on the current route
  const backgroundImage = useMemo(() => {
    return routeBackgrounds[location.pathname] || '/images/default-background.jpg';
  }, [location.pathname]);

  const backgroundPosition = routeBackgroundPositions[location.pathname] || 'center';

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition,
        minHeight: '100vh',
        backgroundColor: '#000' // fallback if image fails
      }}
    >
      <div className="content">
        <CssBaseline />
        <SideNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bio" element={<Bio />} />
          <Route exact path="/production-engineering" element={<Produced />} />
          <Route exact path="/research" element={<Research />} />
          <Route exact path="/email-form" element={<EmailForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
