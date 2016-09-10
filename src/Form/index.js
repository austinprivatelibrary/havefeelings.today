import React, {
  PropTypes,
} from 'react';
import radium from 'radium';

const Form = ({ doDisplay, setEmojis, hasEmojis }) => (
  <form
    className="Form"
    action
    onSubmit={event => {
      event.preventDefault();
      doDisplay();
    }}
  >
    <input
      type="text"
      style={[Form.styles.InputAndSubmit, Form.styles.Input]}
      placeholder="Enter some emojis..."
      onChange={({ target: { value } }) => setEmojis(value)}
    />
    <button
      type="submit"
      style={[
        Form.styles.InputAndSubmit,
        Form.styles.Submit,
        !hasEmojis && Form.styles.SubmitDisabled,
      ]}
      disabled={!hasEmojis}
    >
      Have Feelings
    </button>
  </form>
);

Form.styles = {
  InputAndSubmit: {
    display: 'block',
    borderWidth: 0,
    paddingTop: '1rem',
    paddingRight: '.75rem',
    paddingBottom: '1rem',
    paddingLeft: '.75rem',
    fontSize: '20px',
    textAlign: 'center',
  },
  Input: {
    appearance: 'none',
    width: '100%',
    borderRadius: 0,
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#E7E7E7',
    backgroundColor: '#FFF',
  },
  Submit: {
    transitionProperty: 'all',
    transitionDuration: '.125s',
    transitionTimingFunction: 'ease-in-out',
    cursor: 'pointer',
    marginTop: '1rem',
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    width: '100%',
    borderRadius: '6px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#1589C9',
    backgroundColor: '#1589C9',
    color: '#FFF',
    fontWeight: 600,
  },
  SubmitDisabled: {
    cursor: 'not-allowed',
    borderColor: '#E7E7E7',
    backgroundColor: 'transparent',
    color: '#E7E7E7',
  },
};

Form.propTypes = {
  hasEmojis: PropTypes.bool.isRequired,
  setEmojis: PropTypes.func.isRequired,
  doDisplay: PropTypes.func.isRequired,
};

export default radium(Form);
