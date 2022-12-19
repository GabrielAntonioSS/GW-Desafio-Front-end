import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListUser from './pages/listUser/listUser';
import Login from './pages/login/login';
import Register from './pages/register/register';
import UserProfile from './pages/userProfile/userProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />       
          <Route path="/listUser" component={ListUser} />
          <Route path="/userProfile" component={UserProfile} />
        </Switch>  
        </BrowserRouter>   

  </React.StrictMode>
);