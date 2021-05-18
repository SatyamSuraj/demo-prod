import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    HATS PAGE
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop/hats' component={HatsPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
