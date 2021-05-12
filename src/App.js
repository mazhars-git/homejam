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
    <div className="full-area">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1 style={{
              color: 'red', 
              margin: '50px', 
              textAlign: 'center', 
              fontWeight: 'bold'}}>
                Error, 404!! something went wrong.
            </h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
