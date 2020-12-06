import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../store/actions";

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryTitle: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ categoryTitle: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addCategory(this.state.categoryTitle);
    this.setState({ categoryTitle: "" });
  }

  render() {
    return (
      <div>
        <h1>Add Category</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Title'
              required
              onChange={this.handleChange}
              value={this.state.categoryTitle}
            ></input>
          </div>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (categoryTitle) => dispatch(addCategory(categoryTitle)),
  };
};
export default connect(null, mapDispatchToProps)(AddCategory);
