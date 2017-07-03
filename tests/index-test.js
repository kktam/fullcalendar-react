import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Component from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a day button', () => {
    render(<Component/>, node, () => {
      expect(node.innerHTML).toContain('day')
    })
  })  

  it('displays a week button', () => {
    render(<Component/>, node, () => {
      expect(node.innerHTML).toContain('list week')
    })
  })

  it('displays a month button', () => {
    render(<Component/>, node, () => {
      expect(node.innerHTML).toContain('month')
    })
  })  
})
