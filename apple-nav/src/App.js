import React from 'react';
// import logo from './logo.svg';
import Nav from '/Users/Anna/Lambda School/Sprint 8 - Single Page Applications (SPAs)/Day 2 - React Router II/React-Router-Apple-Nav/apple-nav/src/components/Nav.js';
import Mac from './components/Mac';
import iPad from './components/iPad';
import iPhone from './components/iPhone';
import Watch from './components/Watch';
import TV from './components/TV';
import Music from './components/Music';
import Support from './components/Support';
// import styled from 'styled-components';
import { Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav>
      <Route 
        path='/mac'
        component={Mac}
      />
       <Route 
        path='/ipad'
        component={iPad}
      />
       <Route 
        path='/iphone'
        component={iPhone}
      />
       <Route 
        path='/watch'
        component={Watch}
      />
       <Route 
        path='/tv'
        component={TV}
      />
       <Route 
        path='/music'
        component={Music}
      />
       <Route 
        path='/support'
        component={Support}
      />

      </Nav>
        
      </header>
    </div>
  );
}

export default App;
