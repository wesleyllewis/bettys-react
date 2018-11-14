import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FoodItem extends Component {
  onDeleteClick(id) {
    this.props.deleteItem(id);
  }
  render() {
    const { item } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-4">
            <p className="text-center">{item.name}</p>
            <p className="text-center">{item.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

FoodItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default FoodItem;
