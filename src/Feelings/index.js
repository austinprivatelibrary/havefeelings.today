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

const SKIN_TONES = /🏻|🏼|🏽|🏾|🏿/;

export default class Feelings extends Component {
  static propTypes = {
    userAgent: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.isIos = new MobileDetect(props.userAgent).is('iOS');
    this.state = this.initialState = {
      displaying: false,
      emojis: [],
    };
  }
  @autobind
  setEmojis(input) {
    const emojis = input.match(emojiRegex());
    this.setState({
      emojis: emojis ? emojis.map((emoji, index) => {
        if (index + 1 < emojis.length && emojis[index + 1].match(SKIN_TONES)) {
          return emoji + emojis[index + 1].match(SKIN_TONES)[0];
        }
        if (emoji.match(SKIN_TONES)) {
          return false;
        }
        return emoji;
      }).filter(e => !!e) : [],
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
      <div className="Feelings">
        {this.state.displaying && (
          <Display
            emojis={this.state.emojis}
            dontDisplay={this.dontDisplay}
            isIos={!!this.isIos}
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
