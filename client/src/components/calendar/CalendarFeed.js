import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarItem from './CalendarItem';

class CalendarFeed extends Component {
  render() {
    const { items } = this.props;
    return items.map(item => <CalendarItem key={item._id} item={item} />);
  }
}

CalendarFeed.propTypes = {
  items: PropTypes.array.isRequired
};

export default CalendarFeed;
