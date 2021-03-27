import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

// import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';
// import ResponsiveDrawer from '../components/DemoNavBar';
import SideNav from '../components/SideNav';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <SideNav />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
