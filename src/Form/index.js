import React, {
  PropTypes,
} from 'react';

const Form = ({ doDisplay, setEmojis, hasEmojis }) => (
  <form
    action
    className="form"
    onSubmit={event => {
      event.preventDefault();
      doDisplay();
    }}
  >
    <input
      type="text"
      placeholder="Enter some emojis..."
      onChange={({ target: { value } }) => setEmojis(value)}
    />
    <button
      type="submit"
      disabled={!hasEmojis}
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
