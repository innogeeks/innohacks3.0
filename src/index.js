import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './containers/navbar/App.jsx';
import './index.css'
import Cursor from 'components/cursor/cursor.js';

const rootElement = document.getElementById('body');

ReactDOM.render(
  <React.Fragment>
      <Nav />
      <Cursor/>
  </React.Fragment>,
  rootElement
);
