import React, {Component} from 'react'
import PropTypes from 'prop-types'

import $ from 'jquery'
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'

class FullCalendar extends Component {
    componentDidMount() {
        const { calendar } = this.refs;

        this._calendar = $(calendar);
        this._calendar.fullCalendar();
    }

    render() {
        return (
            <div ref="calendar"></div>
        );
    }
}

export default FullCalendar

