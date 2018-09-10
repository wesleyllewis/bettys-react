import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CalendarForm from './CalendarForm';
import CalendarFeed from './CalendarFeed';
import Spinner from '../common/Spinner';
import { getItems } from '../../actions/calendarActions';

class Calendar extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items, loading } = this.props.item;
    let itemContent;

    if (items === null || loading) {
      itemContent = <Spinner />;
    } else {
      itemContent = <CalendarFeed items={items} />;
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{itemContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(Calendar);
