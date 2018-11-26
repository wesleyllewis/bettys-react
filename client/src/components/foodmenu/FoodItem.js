import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteFoodItem } from '../../actions/foodActions';

class FoodItem extends Component {
  onDeleteClick(id) {
    this.props.deleteFoodItem(id);
  }
  render() {
    const { foodItem } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-4">
            <p className="text-center">{foodItem.name}</p>
            <p className="text-center">{foodItem.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

FoodItem.propTypes = {
  foodItem: PropTypes.object.isRequired
};

export default FoodItem;
