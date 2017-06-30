import React, {Component} from 'react'
import {render} from 'react-dom'

import FullCalendar from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>fullcalendar-react Demo</h1>
      <FullCalendar/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
