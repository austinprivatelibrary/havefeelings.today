import React, {
  Component,
  PropTypes,
} from 'react';
import Radium from 'radium';
import { autobind } from 'core-decorators';

@Radium
export default class Suggestor extends Component {
  static styles = {
    Suggestor: {
      marginTop: 0,
      marginLeft: 'auto',
      marginBottom: '2.5rem',
      marginRight: 'auto',
      width: '128px',
      height: '128px',
      borderWidth: '2px',
      borderStyle: 'dashed',
      borderColor: '#E7E7E7',
      borderRadius: '50%',
      fontSize: '64px',
      lineHeight: '128px',
      textAlign: 'center',
    },
  }
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
      '📴',
      '🦄',
      '🏖',
      '🎉',
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
      <div className="Suggestor" style={[Suggestor.styles.Suggestor]} onClick={this.handleClick}>
        {this.state.emoji}
      </div>
    );
  }
}
