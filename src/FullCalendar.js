import React, {Component} from 'react'
import PropTypes from 'prop-types'

import $ from 'jquery'
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'

class FullCalendar extends Component {

    componentDidMount() {
        const { calendar } = this.refs;

        this._calendar = $(calendar);
        this._calendar.fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'listDay,listWeek,month'
			},

			// customize the button names,
			// otherwise they'd all just say "list"
			views: {
				listDay: { buttonText: 'list day' },
				listWeek: { buttonText: 'list week' }
			},

			defaultView: 'month',
            
            events: this.props.events,
        });
    }

    render() {
        return (
            <div ref="calendar"></div>
        );
    }
}

FullCalendar.propTypes = {
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired      
  }),
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.number.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date),
    url: PropTypes.string
  }))
};

export default FullCalendar

