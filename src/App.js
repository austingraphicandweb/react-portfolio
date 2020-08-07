import React from 'react';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './components/portfolio/portfolio';
import Home from './components/home/home';
import Contact from './components/contact/contact';


function App() {
  return (
    <div>
      <Nav />
      <h1>Hello</h1>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
