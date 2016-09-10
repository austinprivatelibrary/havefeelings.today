import assert from 'assert';
import React from 'react';
import {
  render,
  findDOMNode,
} from 'react-dom';
import {
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass,
  Simulate,
} from 'react-addons-test-utils';
import Feelings from '../src/Feelings';

function getFeelings(userAgent) {
  return render(
    <Feelings
      userAgent={userAgent || window.navigator.userAgent}
    />,
    document.body.appendChild(document.createElement('div'))
  );
}

describe('Feelings', () => {
  it('renders', () => {
    const feelings = getFeelings();
    assert.equal(findDOMNode(feelings).className, 'Feelings');
  });
  it('displays emojis', () => {
    const feelings = getFeelings();
    const input = findRenderedDOMComponentWithTag(feelings, 'input');
    input.value = '👻';
    Simulate.change(input);
    Simulate.submit(findRenderedDOMComponentWithTag(feelings, 'form'));
    findRenderedDOMComponentWithClass(feelings, 'Display');
  });
  it('handles skin tones', done => {
    const feelings = getFeelings();
    const input = findRenderedDOMComponentWithTag(feelings, 'input');
    input.value = '🙌🏻🙌🏼🙌🏽🙌🏾🙌🏿';
    Simulate.change(input);
    Simulate.submit(findRenderedDOMComponentWithTag(feelings, 'form'));
    setTimeout(() => {
      assert.equal(findRenderedDOMComponentWithClass(feelings, 'Display').innerHTML, '🙌🏼');
      done();
    }, 1000);
  });
  it('cycles emojis', done => {
    const feelings = getFeelings();
    const input = findRenderedDOMComponentWithTag(feelings, 'input');
    input.value = '🌒🌓🌔🌕🌖🌗🌘🌑';
    Simulate.change(input);
    Simulate.submit(findRenderedDOMComponentWithTag(feelings, 'form'));
    setTimeout(() => {
      assert.equal(findRenderedDOMComponentWithClass(feelings, 'Display').innerHTML, '🌓');
      done();
    }, 1000);
  });
  it('stops displaying emojis', () => {
    const feelings = getFeelings();
    const input = findRenderedDOMComponentWithTag(feelings, 'input');
    input.value = '🗝';
    Simulate.change(input);
    Simulate.submit(findRenderedDOMComponentWithTag(feelings, 'form'));
    Simulate.click(findRenderedDOMComponentWithClass(feelings, 'Display'));
    findRenderedDOMComponentWithClass(feelings, 'Form');
  });
});
