import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { MenuSidebar } from './components/ChannelMenu/MenuSidebar.js'
import './reportWebVitals.js'

export default class App extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="header__block">
              <button className="header__menu">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
              </button>
              <div className="header__title">
                  <span className="header__title-text">Внутри Лапенко</span>
              </div>
          </div>
        </header>
        <div className="container">
          <MenuSidebar />
        </div>
      </>
    );
  };
}
