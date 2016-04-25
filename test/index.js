import assert from 'assert'
import React, {
  TestUtils,
} from 'react'
import {
  render,
  findDOMNode,
} from 'react-dom'
import {
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass,
  Simulate,
} from 'react-addons-test-utils'
import Feelings from '../src/Feelings'

function getFeelings(userAgent) {
  return render(
    <Feelings
      userAgent={userAgent ? userAgent : window.navigator.userAgent}
    />,
    document.body.appendChild(document.createElement('div'))
  )
}

describe('Feelings', () => {
  it('renders', () => {
    const feelings = getFeelings()
    assert.equal(findDOMNode(feelings).className, 'feelings')
  })
  it('knows when it\'s iOS', () => {
    const feelings = getFeelings('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1')
    assert.equal(findDOMNode(feelings).className, 'feelings is-ios')
  })
  it('displays emojis', () => {
    const feelings = getFeelings()
    const input = findRenderedDOMComponentWithTag(feelings, 'input')
    input.value = '👻'
    Simulate.change(input)
    Simulate.submit(findRenderedDOMComponentWithTag(feelings, 'form'))
    findRenderedDOMComponentWithClass(feelings, 'display')
  })
  it('cycles emojis', done => {
    const feelings = getFeelings()
    const input = findRenderedDOMComponentWithTag(feelings, 'input')
    input.value = '🌕🌖🌗🌘🌑🌒🌓🌔'
    Simulate.change(input)
    Simulate.submit(findRenderedDOMComponentWithTag(feelings, 'form'))
    setTimeout(() => {
      assert.equal(findRenderedDOMComponentWithClass(feelings, 'display').innerHTML, '🌖')
      done()
    }, 1000)
  })
  it('stops displays emojis', () => {
    const feelings = getFeelings()
    const input = findRenderedDOMComponentWithTag(feelings, 'input')
    input.value = '🗝'
    Simulate.change(input)
    Simulate.submit(findRenderedDOMComponentWithTag(feelings, 'form'))
    Simulate.click(findRenderedDOMComponentWithClass(feelings, 'display'))
    findRenderedDOMComponentWithClass(feelings, 'form')
  })
  it('doesn\'t display if emojis are not entered', () => {
    const feelings = getFeelings()
    const form = findRenderedDOMComponentWithTag(feelings, 'form')
    const input = findRenderedDOMComponentWithTag(feelings, 'input')
    input.value = 'yea u no it dawg'
    Simulate.change(input)
    Simulate.submit(form)
    findRenderedDOMComponentWithClass(feelings, 'form')
  })
  it('toggles the about screen', () => {
    const feelings = getFeelings()
    const about = findRenderedDOMComponentWithClass(feelings, 'about')
    Simulate.click(findRenderedDOMComponentWithClass(feelings, 'about-toggle'))
    assert.equal(findDOMNode(about).className, 'about is-open')
    Simulate.click(findRenderedDOMComponentWithClass(feelings, 'about-toggle'))
    assert.equal(findDOMNode(about).className, 'about')
  })
})
