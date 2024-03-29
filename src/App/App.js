import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Routes from '../helpers/Routes';
// import ResponsiveDrawer from '../components/DemoNavBar';
import SideNav from '../components/SideNav';
import Bio from '../views/Bio';
import Contact from '../views/Contact';
import Home from '../views/Home';
import MyMusic from '../views/MyMusic';
import NotFound from '../views/NotFound';
import Produced from '../views/Produced';
import Research from '../views/Research';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />}
          />
          <Route
            exact
            path='/bio'
            element={<Bio />}
          />
          <Route
            exact
            path='/production-engineering'
            element={<Produced />}
          />
          <Route
            exact
            path='/my-music'
            element={<MyMusic />}
          />
          <Route
            exact
            path='/contact'
            element={<Contact />}
          />
          <Route
            exact
            path='/research'
            element={<Research />}
          />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
