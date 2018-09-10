import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';

class CalendarItem extends Component {
  render() {
    const { item, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <p className="text-center">{item.title}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{item.date}</p>
            <p className="lead">{item.time}</p>
            <p className="lead">{item.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

CalendarItem.propTypes = {
  auth: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CalendarItem);
