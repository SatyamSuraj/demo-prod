import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUpPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
