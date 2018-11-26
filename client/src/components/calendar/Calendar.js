import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import CalendarForm from './CalendarForm';
import CalendarFeed from './CalendarFeed';
import Spinner from '../common/Spinner';
import { getCalendarItems } from '../../actions/calendarActions';

class Calendar extends Component {
  componentDidMount() {
    this.props.getCalendarItems();
  }

  render() {
    const { calendarItems, loading } = this.props.calendarItem;
    let calendarItemContent;

    if (calendarItems === null || loading) {
      calendarItemContent = <Spinner />;
    } else {
      calendarItemContent = <CalendarFeed calendarItems={calendarItems} />;
    }
    return (
      <div className="feed">
        <div className="container">
          <h1 className="text-center mt-6 mb-3">Upcoming Shows at Betty's</h1>
          <div className="row">
            <div className="col-md-12">{calendarItemContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  getCalendarItems: PropTypes.func.isRequired,
  calendarItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  calendarItem: state.calendarItem
});

export default connect(
  mapStateToProps,
  { getCalendarItems }
)(Calendar);
