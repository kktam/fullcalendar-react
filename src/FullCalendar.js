import React, {Component} from 'react'
import PropTypes from 'prop-types'

import $ from 'jquery'
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'

import { getEvents, calendarUrls } from './api/gcalevent'

class FullCalendar extends Component {

    filters = [];
    isFiltered = [];

    componentDidMount() {
        getEvents((events) => {
            let filteredEvents = events;
            let transformedEvents = filteredEvents.map((item) =>{
                return {
                    title: item.title,
                    start: $.fullCalendar.moment(item.start),
                    end: (item.end == 'undefined' || item.end == null) ? null : $.fullCalendar.moment(item.end),
                    allDay: (item.end == 'undefined' || item.end == null) ? false: null,
                    url: item.calendar,
                    hasTime: true 
                }
            });
            this.setState({events: filteredEvents});

            if (this._calendar != null) {
                this._calendar.fullCalendar( 'addEventSource', transformedEvents );
            }
        });

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
    url: PropTypes.string,
    hasTime: PropTypes.instanceOf(Boolean)
  }))
};

export default FullCalendar

