import React from 'react';
import About from './components/About';
import Home from './components/Home';
import { Route } from 'react-router-dom';

const App = () => (
  <>
    <Route exact path="/about" component={About}/>
    <Route exact path="/" component={Home}/>
  </>
);

export default App;
