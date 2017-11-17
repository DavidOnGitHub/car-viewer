import React from 'react';
import '../styles/main.scss';
import Header from './Header';
import Routes from '../Routes';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Routes />
        </div>
      </div>
    );
  }
}
