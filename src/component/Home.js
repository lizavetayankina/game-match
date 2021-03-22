import React from 'react';
import Header from './Header';
import Content from './Content';

export default function Home () {
    return (
    <div className="wrapper">
    <Header />
    <div className="contet-rules">
    <Content />
    </div>
   </div>
    )
}