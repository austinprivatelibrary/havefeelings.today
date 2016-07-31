import React, {
  Component,
  PropTypes,
} from 'react';
import { autobind } from 'core-decorators';
import emojiRegex from 'emoji-regex';
import MobileDetect from 'mobile-detect';

import Display from '../Display';
import Form from '../Form';
import About from '../About';

export default class Feelings extends Component {
  static propTypes = {
    userAgent: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.isIos = new MobileDetect(this.props.userAgent).is('iOS');
    this.initialState = {
      displaying: false,
      emojis: [],
    };
    this.state = this.initialState;
  }
  @autobind
  setEmojis(input) {
    this.setState({
      emojis: input.match(emojiRegex()) || [],
    });
  }
  @autobind
  doDisplay() {
    if (this.state.emojis.length) {
      this.setState({
        displaying: true,
      });
    }
  }
  @autobind
  dontDisplay() {
    this.setState(this.initialState);
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
    );
  }
}
