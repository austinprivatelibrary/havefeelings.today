import React, {
  Component,
  PropTypes,
} from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form
        action
        className="form"
        onSubmit={event => {
          event.preventDefault()
          this.props.doDisplay()
        }}
      >
        <input
          type="text"
          placeholder="Enter some emojis..."
          onChange={event => this.props.setEmojis(event.target.value)}
        />
        <button
          type="submit"
          disabled={!this.props.hasEmojis}
        >
          Have Feelings
        </button>
      </form>
    )
  }
}

Form.propTypes = {
  hasEmojis: React.PropTypes.bool.isRequired,
  setEmojis: React.PropTypes.func.isRequired,
  doDisplay: React.PropTypes.func.isRequired,
}
