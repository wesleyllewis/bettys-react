import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import './App.css';
class App extends Component {
  render() {
    return <h1>BETTY'S!</h1>;
  }
}

export default App;
