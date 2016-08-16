import React from 'react';
import {
  render,
} from 'react-dom';

import Feelings from './Feelings';

import './reset.css';
import './Feelings/feelings.css';
import './Display/display.css';
import './Form/form.css';
import './About/about.css';
import './Suggestor/suggestor.css';

render(
  <Feelings userAgent={window.navigator.userAgent} />,
  document.getElementsByTagName('main')[0]
);

/* eslint-disable no-console */
console.log('%c🕶👻', 'font-size: 126px;');
