import React, {
  PropTypes,
} from 'react';

const Form = props => (
  <form
    action
    className="form"
    onSubmit={event => {
      event.preventDefault();
      props.doDisplay();
    }}
  >
    <input
      type="text"
      placeholder="Enter some emojis..."
      onChange={event => props.setEmojis(event.target.value)}
    />
    <button
      type="submit"
      disabled={!props.hasEmojis}
    >
      Have Feelings
    </button>
  </form>
);

Form.propTypes = {
  hasEmojis: PropTypes.bool.isRequired,
  setEmojis: PropTypes.func.isRequired,
  doDisplay: PropTypes.func.isRequired,
};

export default Form;
