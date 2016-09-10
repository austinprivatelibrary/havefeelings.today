import React from 'react';
import {
  render,
} from 'react-dom';

import Feelings from './Feelings';

import './reset.css';
import './global.css';

render(
  <Feelings userAgent={window.navigator.userAgent} />,
  document.getElementsByTagName('main')[0]
);

/* eslint-disable no-console, max-len */
setTimeout(() => {
  console.log('%cFill your humdrum face-to-face conversations with the joys of texting', 'font-weight: bold;');
  console.log('%chttps://www.flipactual.com', 'font-weight: bold;');
}, 1000);
