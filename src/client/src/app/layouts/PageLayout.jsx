import React from 'react';

/*
Import styling
*/
import logo from '../assets/images/logo.svg';
import './Page.css';
 
const PageLayout = ({ component: Component, ...rest }) => {
  return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
};
 
export default PageLayout;