import React, {
  Component,
  PropTypes,
} from 'react';
import { autobind } from 'core-decorators';

export default class Suggestor extends Component {
  static propTypes = {
    setEmojis: PropTypes.func.isRequired,
    doDisplay: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      emoji: this.getRandomEmoji(),
    };
  }
  getRandomEmoji() {
    const emojis = [
      '🍕',
      '💖',
      '👻',
    ];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  @autobind
  handleClick() {
    this.props.setEmojis(this.state.emoji);
    this.props.doDisplay();
  }
  render() {
    return (
      <div className="suggestor" onClick={this.handleClick}>
        {this.state.emoji}
      </div>
    );
  }
}
