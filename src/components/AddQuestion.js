import React, { Component } from "react";

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { QuestionTitle: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ QuestionTitle: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addCategory(this.state.QuestionTitle);
    this.setState({ QuestionTitle: "" });
  }

  render() {
    return (
      <div>
        <h1>Add Question</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              required
              onChange={this.handleChange}
              value={this.state.QuestionTitle}
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
