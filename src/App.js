import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ourstory from './components/Ourstory';
import Wedding from './components/Wedding';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hero}/>
          <Route path="/ourstory" exact component={Ourstory}/>
          <Route path="/wedding" exact component={Wedding}/>
        </Switch>
      </Router>
      <Footer />
      
  
        </>
  );
}

export default App;
