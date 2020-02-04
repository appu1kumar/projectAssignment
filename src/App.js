import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Other1 from './components/Other1';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='main'>
          <Route exact path='/' component={Dashboard} />
          <Route path='/other1' component={Other1} />
        </div>
      </div>
    </Router>
  );
}

export default App;
