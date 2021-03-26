import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
        </Router>
      </div>
    );
  }
}

export default App;
