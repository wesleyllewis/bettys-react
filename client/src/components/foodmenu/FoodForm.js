import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { addFoodItem } from '../../actions/foodActions';

class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newFoodItem = {
      name: this.state.name,
      price: this.state.price
    };

    this.props.addFoodItem(newFoodItem);
    this.props.history.push('/dashboard');
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="add-item">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text center">Add A Menu Item</h1>
              <small className="d-block pb-3">* = Required Field</small>
              <form onSumbit={this.onSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="* Menu Item Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextFieldGroup
                    placeholder="* Menu Item Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    error={errors.price}
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FoodForm.propTypes = {
  addFoodItem: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addFoodItem }
)(withRouter(FoodForm));
