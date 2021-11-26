import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { Header, Footer } from 'components/core';
import LoginScreen from 'screens/Auth/LoginScreen';
import RegisterScreen from 'screens/Auth/RegisterScreen';
import HomeScreen from 'screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/' component={HomeScreen} />
        </main>
      <Footer />
    </Router>
  );
}

export default App;
