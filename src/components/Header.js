import React from 'react';
import { browserHistory } from 'react-router';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  goToSearch(e) {
    e.preventDefault();
    browserHistory.push('/search');
  }

  goToHome() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="header">
        <div className="car-icon" onClick={this.goToHome}/>
        <div className="actions">
          <a onClick={this.goToSearch} className="action-button">
            Search
          </a>
        </div>
      </div>
    );
  }
}
