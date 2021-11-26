import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { Header, Footer } from 'components/core';
import LoginScreen from 'screens/Auth/LoginScreen';
import RegisterScreen from 'screens/Auth/RegisterScreen';
import HomeScreen from 'screens/Home/HomeScreen';
import UserListScreen from 'screens/Admin/UserListScreen';

function App() {
  return (
    <Router>
      <Header />
        <main>
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/admin/user_list' component={UserListScreen} exact />
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/' component={HomeScreen} exact />
        </main>
      <Footer />
    </Router>
  );
}

export default App;
