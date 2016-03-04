import React, {
  Component,
  PropTypes,
} from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    return(
      <div
        className={`about${this.state.open ? ' is-open' : ''}`}
      >
        <div className="about-wrapper">
          <div className="about-content">
            <p>Now, with the help of Feelings, you can fill your humdrum face-to-face conversations with the joys of texting – Get your phone out and show them how you really feel!</p>
            <div className="hr">•••</div>
            <p>Feelings is a production of <a href="//austinprivatelibrary.online">The Austin Private Library</a>.</p>
          </div>
        </div>
        <div
          className="about-toggle"
          onClick={this.toggle}
        >
          {this.state.open ? 'Have Feelings Again' : 'Supplemental Knowledge'}
        </div>
      </div>
    )
  }
}
