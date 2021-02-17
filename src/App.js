import React from 'react';
import Content from './component/Content';
import Header from './component/Header';
import '../src/styles/App.css';


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
