import React, {
  Component,
} from 'react';
import { autobind } from 'core-decorators';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  @autobind
  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <div
        className={`about${this.state.open ? ' is-open' : ''}`}
      >
        <div className="about-wrapper">
          <div className="about-content">
            <p>Fill your humdrum face-to-face conversations with the joys of texting.</p>
            <p><em>Feelings is brought to you by <a href="http://www.flipactual.com">Flip</a>.</em></p>
          </div>
        </div>
        <div
          className="about-toggle"
          onClick={this.toggle}
        >
          {this.state.open ? 'Have Feelings Again' : 'Supplemental Knowledge'}
        </div>
      </div>
    );
  }
}
