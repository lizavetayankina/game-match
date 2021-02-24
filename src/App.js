import React from 'react';
import Welcome from './component/Welcome';
import Game from './component/Game';
import Content from './component/Content';
import Header from './component/Header';
import {BrowserRouter, Route} from "react-router-dom";
import '../src/styles/App.css';


function App() {
  return (
  <div>
 <Header />
  <BrowserRouter>
    <Route exact path="/Game" component={Game} />
    <Route exact path="/" component={Content} />
    <Route exact path="/Home" component={Welcome} />
 
</BrowserRouter> 
  </div>
  );
}

export default App;
