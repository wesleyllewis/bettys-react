import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem';

class FoodFeed extends Component {
  render() {
    const { foodItems } = this.props;
    return foodItems.map(foodItem => (
      <FoodItem key={foodItem._id} foodItem={foodItem} />
    ));
  }
}

FoodFeed.propTypes = {
  foodItems: PropTypes.array.isRequired
};

export default FoodFeed;
