import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ourstory from './components/Ourstory';
import Wedding from './components/Wedding';
import Celebrate from './components/Celebrate';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <>
      <Router>
      <Navbar />
         <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Hero}/>
          <Route path="/ourstory" exact component={Ourstory}/>
          <Route path="/wedding" exact component={Wedding}/>
          <Route path="/celebrate" exact component={Celebrate}/>
        </Switch>
      </Router>
      <Footer />
      
  
      </>
  );
}

export default App;
