import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class MG_Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-bottom">
      <div className="container">
      <div className="navbar-text pull-left">
      <p>
      <i className="fa fa-copyright"></i> {this.props.description}
      </p>
      </div>
      </div>
      </nav>
    );
  }
}

MG_Footer.propTypes = {
  description: React.PropTypes.string.isRequired
}
//MG_Footer.defaultProps = { description: 'not set' };

//export default MG_Footer
