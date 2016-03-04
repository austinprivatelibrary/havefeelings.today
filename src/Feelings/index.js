import React, {
  Component,
  PropTypes,
} from 'react'
import emojiRegex from 'emoji-regex'
import MobileDetect from 'mobile-detect'

import Display from '../Display'
import Form from '../Form'
import About from '../About'

export default class Feelings extends Component {
  constructor(props) {
    super(props)
    this.isIos = new MobileDetect(this.props.userAgent).is('iOS')
    this.initialState = {
      displaying: false,
      emojis: [],
    }
    this.state = this.initialState
    this.setEmojis = this.setEmojis.bind(this)
    this.doDisplay = this.doDisplay.bind(this)
    this.dontDisplay = this.dontDisplay.bind(this)
  }
  setEmojis(input) {
    this.setState({
      emojis: input.match(emojiRegex()) || [],
    })
  }
  doDisplay() {
    this.state.emojis.length && this.setState({
      displaying: true,
    })
  }
  dontDisplay() {
    this.setState(this.initialState)
  }
  render() {
    return (
      <div className={`feelings${this.isIos ? ' is-ios' : ''}`}>
        {this.state.displaying && (
          <Display
            emojis={this.state.emojis}
            dontDisplay={this.dontDisplay}
          />
        )}
        {!this.state.displaying && (
          <Form
            hasEmojis={!!this.state.emojis.length}
            setEmojis={this.setEmojis}
            doDisplay={this.doDisplay}
          />
        )}
        {!this.state.displaying && (
          <About />
        )}
      </div>
    )
  }
}

Feelings.propTypes = {
  userAgent: PropTypes.string.isRequired,
}
