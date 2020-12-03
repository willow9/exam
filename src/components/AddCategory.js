import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addCategory } from "./../store/actions/categoriesActions";

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { categorie: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ categorie: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let id = uuidv4();
    this.props.addCategory({ id: uuidv4(), text: this.state.categorie });
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Add Category</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input className='form-control' onChange={this.handleChange} value={this.state.categorie}></input>
          </div>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    someData: state.cat.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (category) => dispatch(addCategory(category)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
