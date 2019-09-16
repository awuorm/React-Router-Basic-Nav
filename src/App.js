import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/"  components={Home}></Route>
    <Route path="/about" components={About}></Route>
    <Route path="/contact" components={Contact}></Route>
  </div>
);

export default App;
