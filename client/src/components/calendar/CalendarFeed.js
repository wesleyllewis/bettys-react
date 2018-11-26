import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarItem from './CalendarItem';

class CalendarFeed extends Component {
  render() {
    const { calendarItems } = this.props;
    return calendarItems.map(calendarItem => (
      <CalendarItem key={calendarItem._id} calendarItem={calendarItem} />
    ));
  }
}

CalendarFeed.propTypes = {
  calendarItems: PropTypes.array.isRequired
};

export default CalendarFeed;
