import React, {
  Component,
  PropTypes,
} from 'react';
import { autobind } from 'core-decorators';
import emojiRegex from 'emoji-regex';
import MobileDetect from 'mobile-detect';

import Display from '../Display';
import Form from '../Form';
import Suggestor from '../Suggestor';

export default class Feelings extends Component {
  static propTypes = {
    userAgent: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.isIos = new MobileDetect(this.props.userAgent).is('iOS');
    this.state = this.initialState = {
      displaying: false,
      emojis: [],
    };
  }
  @autobind
  setEmojis(input) {
    this.setState({
      emojis: input.match(emojiRegex()) || [],
    });
  }
  @autobind
  doDisplay() {
    this.setState({
      displaying: true,
    });
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
          <Suggestor
            setEmojis={this.setEmojis}
            doDisplay={this.doDisplay}
          />
        )}
        {!this.state.displaying && (
          <Form
            hasEmojis={!!this.state.emojis.length}
            setEmojis={this.setEmojis}
            doDisplay={this.doDisplay}
          />
        )}
      </div>
    );
  }
}
