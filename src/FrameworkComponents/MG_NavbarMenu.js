import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class MG_NavbarMenu extends React.Component{
  render() {
    let menuData = <span>{this.props.menuDataUrl}</span>
    return (
      <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">{this.props.appName}</a>
      </div>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div className="collapse navbar-collapse" id="navbar">
      <ul className="nav navbar-nav">
      <li className="active"><a href="#">Dashboard</a></li>
      <li><a href="#">Movimenti</a></li>
      <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Impostazioni<b className="caret"></b></a>
      <ul className="dropdown-menu">
      <li className="dropdown-header"><strong>Generali</strong></li>
      <li><a href="#">Gruppi voci di spesa</a></li>
      <li><a href="#">Voci di spesa</a></li>
      <li className="divider"></li>
      <li className="dropdown-header"><strong>Utente</strong></li>
      <li><a href="#">Banche</a></li>
      <li><a href="#">Conti Correnti</a></li>
      </ul>
      </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <button type="button" className="btn btn-default navbar-btn">Sign in</button>
      <p className="navbar-text">Signed in as <a href="#" className="navbar-link">Marco</a></p>
      </ul>
      </div>{/* /.navbar-collapse */}
      </div>{/* /.container-fluid */}
      </nav>
    );
  }
}

MG_NavbarMenu.propTypes = {
  appName: React.PropTypes.string.isRequired,
  menuDataUrl: React.PropTypes.string.isRequired
}
{/*
class MG_NavbarItemSimple extends React.Components{
  render(){
    return (
      <li><a href={this.props.url}>{this.props.text}</a></li>
    );
  }
}

MG_NavbarItemSimple.propTypes = {
  text: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
}
*/}
