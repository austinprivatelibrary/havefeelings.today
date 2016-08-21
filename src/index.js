import React from 'react';
import {
  render,
} from 'react-dom';

import Feelings from './Feelings';

import './reset.css';
import './Feelings/feelings.css';
import './Display/display.css';
import './Form/form.css';
import './Suggestor/suggestor.css';

render(
  <Feelings userAgent={window.navigator.userAgent} />,
  document.getElementsByTagName('main')[0]
);

/* eslint-disable no-console, max-len */
console.log('%cFill your humdrum face-to-face conversations with the joys of texting.', 'font-size: 32px;');
console.log('%c👌', 'font-size: 32px;');
console.log('%chttps://www.flipactual.com', 'font-size: 32px;');
