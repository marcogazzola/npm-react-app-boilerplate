import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MG_Footer} from './FrameworkComponents/MG_Footer';
//import {MainMenu} from './FrameworkComponents/MG_NavbarMenu';
var MainMenu = require('./FrameworkComponents/MG_NavbarMenu').default
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MainMenu appName="Sample App" />, document.getElementById('menu'))
ReactDOM.render(<MG_Footer description = "2016 Marco Gazzola" />, document.getElementById('footer'));
