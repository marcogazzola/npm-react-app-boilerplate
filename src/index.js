import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MG_Footer} from './FrameworkComponents/MG_Footer';
import {MG_NavbarMenu} from './FrameworkComponents/MG_NavbarMenu';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MG_NavbarMenu menuDataUrl=".." appName="Sample App" />, document.getElementById('menu'))
ReactDOM.render(<MG_Footer description = "2016 Marco Gazzola" />, document.getElementById('footer'));
