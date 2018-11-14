import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem';

class FoodFeed extends Component {
  render() {
    const { items } = this.props;
    return items.map(item => <FoodItem key={item._id} item={item} />);
  }
}

FoodFeed.propTypes = {
  items: PropTypes.array.isRequired
};

export default FoodFeed;
