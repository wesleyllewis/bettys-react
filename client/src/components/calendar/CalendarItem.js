import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deleteItem, getItem } from '../../actions/calendarActions';

class CalendarItem extends Component {
  // componentDidMount() {
  //   if (this.props.match.params.id) {
  //     this.props.getItem(this.props.match.params.id);
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.item.id === null && this.props.item.loading) {
  //     this.props.hist.push('/not-found');
  //   }
  // }

  onDeleteClick(id) {
    this.props.deleteItem(id);
  }

  render() {
    const { item, auth, showActions } = this.props;
    let showTime = parseInt(item.time);
    return (
      // <Link to={`/calendarItems/${item.id}`}>
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <p className="text-center">{item.title}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">
              <Moment format="DD/MM/YYYY">{item.date}</Moment>
              {' @ '}
              <Moment format="hh:mm a">{showTime}</Moment>
            </p>

            <p className="lead">{item.text}</p>
            {showActions ? (
              <span>
                {' '}
                {item.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, item._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      // </Link>
    );
  }
}

CalendarItem.defaultProps = {
  showActions: true
};

CalendarItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteItem, getItem }
)(CalendarItem);
