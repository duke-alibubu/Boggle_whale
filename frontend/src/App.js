import React from 'react';
import './App.css';
import {Intro} from './javascript/Intro';
import { Content } from './javascript/Content';
import { MenuBar } from './javascript/MenuBar';

function App() {
  return (
    <div>
      <MenuBar />
      <Intro />  
      <Content/>
    </div>
  );
}

export default App;
