import React from 'react';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './components/pages/portfolio/portfolio';
import Home from './components/pages/home/home';


function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
