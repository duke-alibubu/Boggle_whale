import React from 'react';
import './App.css';
import {Intro} from './javascript/Intro';
import { GameBoard } from './javascript/GameBoard';
import { MenuBar } from './javascript/MenuBar';

function App() {
  return (
    <div>
      <MenuBar/>
      <Intro />  
      <GameBoard/>
    </div>
  );
}

export default App;
