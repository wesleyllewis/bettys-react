import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FoodFeed from './FoodFeed';
import Spinner from '../common/Spinner';
import { getFoods } from '../../actions/foodActions';

class FoodMenu extends Component {
  componentDidMount() {
    this.props.getFoods();
  }

  render() {
    const { foodItems, loading } = this.props.foodItem;
    let foodItemContent;

    if (foodItems === null || loading) {
      foodItemContent = <Spinner />;
    } else {
      foodItemContent = <FoodFeed foodItems={foodItems} />;
    }
    return (
      <div className="feed">
        <div className="container">
          <h1 className="text-center mt-6 mb-3">Tasty Treats</h1>
          <div className="row">
            <div className="col-md-12">{foodItemContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

FoodMenu.propTypes = {
  getFoods: PropTypes.func.isRequired,
  foodItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  foodItem: state.foodItem
});

export default connect(
  mapStateToProps,
  { getFoods }
)(FoodMenu);
