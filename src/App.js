import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
  </>
);

export default App;
