import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Calendar from '../calendar/Calendar';
import FoodMenu from './FoodMenu';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Betty's Bar & Grille</h1>
                  <p className="lead"> Live Music Every Night!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="calendar">
            <Calendar />
          </div>
          <div className="foodmenu">
            <FoodMenu />
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
