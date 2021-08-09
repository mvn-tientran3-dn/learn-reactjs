import './App.css';
import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HeaderComponent from './Components/Layouts/HeaderComponent'
import FooterComponent from './Components/Layouts/FooterComponent';

const Home = lazy(() => import('./Components/Pages/Home/Home'));
const ProductList = lazy(() => import('./Components/Pages/Product/ProductList'));
const Account = lazy(() => import('./Components/Pages/Account/Account'));
const Login = lazy(() => import('./Components/Pages/Auth/Login'));
const PrivateRouter = lazy(() => import('./Components/Private/PrivateRouter'));
const ProductDetail = lazy(() => import('./Components/Pages/Product/ProductDetail'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/products',
        component: ProductList,
        exact: true,
    },
    {
        path: "/products/:id",
        component: ProductDetail
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/account',
        component: Account,
    }
];

function App() {
  return (
    <Router>
      <HeaderComponent/>
        <div className="container">
            <Suspense fallback={<div>Loading ...</div>}>
            <Switch>
                {routes.map((route, i) => {
                    if (route.path === '/account') {
                        return <PrivateRouter key={i} path={route.path} component={Account}/>
                    }
                    return <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={item => (
                            <route.component routes={item.component} />
                        )}
                    />
                })}
            </Switch>
            </Suspense>
        </div>
      <FooterComponent/>
    </Router>
  );
}

export default App;
