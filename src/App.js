import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HeaderComponent from './Components/Layouts/HeaderComponent'
import FooterComponent from './Components/Layouts/FooterComponent';
import Home from "./Components/Pages/Home/Home";
import ProductList from "./Components/Pages/Product/ProductList";
import Account from "./Components/Pages/Account/Account";
import Login from "./Components/Pages/Auth/Login";
import PrivateRouter from "./Components/Private/PrivateRouter";

function App() {
  return (
    <Router>
      <HeaderComponent/>
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={ProductList}/>
                <PrivateRouter path="/account" component={Account}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
      <FooterComponent/>
    </Router>
  );
}

export default App;
