import React, {
  Component,
  PropTypes,
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Radium from 'radium';
import { autobind } from 'core-decorators';

@Radium
export default class Display extends Component {
  static styles = {
    Display: {
      backgroundColor: '#FFF',
      fontSize: '126px',
      lineHeight: 1,
      textAlign: 'center',
    },
    DisplayIos: {
      fontSize: '1rem',
      transform: 'scale(10)',
    },
  }
  static propTypes = {
    emojis: PropTypes.arrayOf(PropTypes.string).isRequired,
    dontDisplay: PropTypes.func.isRequired,
    isIos: PropTypes.bool.isRequired,
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
      <ReactCSSTransitionGroup
        transitionName="display"
        transitionAppear
        transitionAppearTimeout={625}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
      >
        <div
          className="Display"
          style={[Display.styles.Display, this.props.isIos && Display.styles.DisplayIos]}
          onClick={this.stop}
        >
          {this.state.currentEmoji}
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
