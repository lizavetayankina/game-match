import React from 'react';
import Content from './component/Content';
import Header from './component/Header';
import '../src/styles/App.css';
import Board from './component/Board';


function App() {
  return (
  <div className="wrapper"> 
  <Header />
  <div className="contet-rules">
  <Content /> 
  </div> 
  <Board />
  </div>
  );
}

export default App;
