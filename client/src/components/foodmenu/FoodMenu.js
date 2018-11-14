import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FoodFeed from './FoodFeed';
import Spinner from '../common/Spinner';
import { getItems } from '../../actions/foodActions';

class FoodMenu extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items, loading } = this.props.foodItem;
    let itemContent;

    if (items === null || loading) {
      itemContent = <Spinner />;
    } else {
      itemContent = <FoodFeed items={items} />;
    }
    return (
      <div className="feed">
        <div className="container">
          <h1 className="text-center mt-6 mb-3">Tasty Treats</h1>
          <div className="row">
            <div className="col-md-12">{itemContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

FoodMenu.propTypes = {
  getItems: PropTypes.func.isRequired,
  foodItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  foodItem: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(FoodMenu);
