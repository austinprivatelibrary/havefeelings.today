import './reset.css'
import './Feelings/index.css'
import './Display/display.css'
import './Form/form.css'
import './About/about.css'

import React from 'react'
import {
  render,
} from 'react-dom'
import MobileDetect from 'mobile-detect'

import Feelings from './Feelings'

render(
  <Feelings userAgent={window.navigator.userAgent}/>,
  document.getElementsByTagName('main')[0]
)

console.log('%chttp://austinprivatelibrary.online', 'color: #804db3;')
