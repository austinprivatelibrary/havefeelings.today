import React, {
  Component,
  PropTypes,
} from 'react';
import { autobind } from 'core-decorators';

export default class Display extends Component {
  static propTypes = {
    emojis: PropTypes.arrayOf(PropTypes.string).isRequired,
    dontDisplay: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.interval = {};
    this.state = {
      currentEmoji: '',
    };
  }
  componentDidMount() {
    this.start();
  }
  setEmoji(index) {
    this.setState({
      currentEmoji: this.props.emojis[index],
    });
  }
  start() {
    let i = 1;
    this.setEmoji(0);
    this.interval = window.setInterval(() => {
      this.setEmoji(i++ % this.props.emojis.length);
    }, 1000);
  }
  @autobind
  stop() {
    window.clearInterval(this.interval);
    this.props.dontDisplay();
  }
  render() {
    return (
      <div
        className="display"
        onClick={this.stop}
      >
        {this.state.currentEmoji}
      </div>
    );
  }
}
