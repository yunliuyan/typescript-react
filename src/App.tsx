import * as React from 'react';
import './App.css';
import Hello from './compoents/Hello'
import Nav from './compoents/Nav'
import GetRouter  from './router'
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><Hello name='云流烟' ecthusiasmLevel={10} />Welcome to typescript-React</h1>
        </header>
        <Nav />
       <GetRouter />
      </div>
    );
  }
}

export default App;
