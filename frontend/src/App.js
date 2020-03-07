import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ViewGame } from './javascript/ViewGame';
import { GameBoard } from './javascript/GameBoard';
import { MenuBar } from './javascript/MenuBar';

function App() {
  return (
    <div>
      <Router>
        <MenuBar />
        <Switch>
          <Route path="/" exact component={GameBoard}/>
          <Route path="/view" exact component={ViewGame} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
