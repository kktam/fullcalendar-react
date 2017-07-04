import React, {Component} from 'react'
import FullCalendar from './FullCalendar'

export default class extends Component {
  render() {
    return (
      <div>
        <FullCalendar 
          events="true"
        />
      </div>
    )
  }
}
