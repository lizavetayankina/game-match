import React from 'react';
import Content from './component/Content';
import Header from './component/Header';
import '../src/styles/App.css';
//import Board from './component/Board';
//import ContentGame from './component/ContentGame';
//import HeaderGame from './component/HeaderGame';



function App() {
  return (
  <div className="wrapper"> 
  <Header />
  <div className="contet-rules">
  <Content /> 
  </div> 
  
  </div>
  );
}

export default App;
