import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <div className="navbar-fixed">
                <nav className="grey darken-4">
                    <div className="nav-wrapper">
                        <ul className="right">
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/creations">
                                    Creations
                                </a>
                            </li>
                            <li>
                                <a href="/tools">
                                    Tools
                                </a>
                            </li>
                            <li>
                                <a href="/about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

          <h1>
              <a href="/">
                  Heroic Webcraft
              </a>
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
