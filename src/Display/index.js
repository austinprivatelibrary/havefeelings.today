import React, {
  Component,
  PropTypes,
} from 'react'

export default class Display extends Component {
  constructor(props) {
    super(props)
    this.interval = {}
    this.state = {
      currentEmoji: '',
    }
    this.stop = this.stop.bind(this)
    return this
  }
  componentDidMount() {
    this.start()
  }
  start() {
    var i = 1
    this.setEmoji(0)
    this.interval = window.setInterval(() => {
      this.setEmoji(i++ % this.props.emojis.length)
    }, 1000)
  }
  setEmoji(index) {
    this.setState({
      currentEmoji: this.props.emojis[index],
    })
  }
  stop() {
    window.clearInterval(this.interval)
    this.props.dontDisplay()
  }
  render() {
    return (
      <div
        className="display"
        onClick={this.stop}
      >
        {this.state.currentEmoji}
      </div>
    )
  }
}

Display.propTypes = {
  emojis: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  dontDisplay: React.PropTypes.func.isRequired,
}
