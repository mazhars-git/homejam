import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
