import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import SideNav from '../components/SideNav';
import Bio from '../views/Bio';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Produced from '../views/Produced';
import Research from '../views/Research';
import './App.scss';

const routeBackgrounds = {
  '/': '/images/BLJ_4352b.jpg',
  '/bio': '/images/BLJ9763.jpg',
  '/production-engineering': '/images/audiodeck.jpg',
  '/research': '/images/BLJ9471.jpg'
};

function AppContent() {
  const location = useLocation();

  // Memoize the background image based on the current route
  const backgroundImage = useMemo(() => {
    return routeBackgrounds[location.pathname] || '/images/default-background.jpg';
  }, [location.pathname]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <SideNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bio" element={<Bio />} />
        <Route exact path="/production-engineering" element={<Produced />} />
        <Route exact path="/research" element={<Research />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
