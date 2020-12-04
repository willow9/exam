import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import React, { Component } from "react";
import { addQuestion } from "./../store/actions/categoriesActions";

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { questionTitle: "", categoryId: "" };
    this.handleInpuChange = this.handleInpuChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInpuChange(event) {
    this.setState({ questionTitle: event.target.value });
  }
  handleSelectChange(event) {
    this.setState({ categoryId: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addQuestion({ title: this.state.questionTitle, categoryId: this.state.categoryId });
    this.setState({ questionTitle: "" });
  }
  //TODO solve select required issue
  render() {
    return (
      <div>
        <h1>Add Question</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='question'
              required
              onChange={this.handleInpuChange}
              value={this.state.questionTitle}
            ></input>
          </div>

          <div className='form-group'>
            <label>Category</label>
            <select className='form-control' onChange={this.handleSelectChange}>
              <option></option>
              {this.props.categories
                ? this.props.categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))
                : null}
            </select>
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
    categories: state.firestore.ordered.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (question) => dispatch(addQuestion(question)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "categories" }])
)(AddQuestion);
