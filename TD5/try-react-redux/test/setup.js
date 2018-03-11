import React from 'react'
import { expect } from 'chai'
import jsdom from 'jsdom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>')

global.React = React
global.expect = expect
global.window = dom.window
global.document = dom.window.document

Object.keys(dom.window).forEach(key => {
  if (!(key in global)) {
    global[key] = dom.window[key]
  }
})
