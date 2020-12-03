import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class AddCategory extends Component {
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
