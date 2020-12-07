import { connect } from "react-redux";
import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteQuestion } from "../store/actions";

class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.findCategory = this.findCategory.bind(this);
  }

  handleDelete = (e) => {
    console.log(e.target.value);
    this.props.deleteQuestion(e.target.value);
  };
  findCategory = (id) => {
    const rez = this.props.categories
      ? this.props.categories.find((c) => {
          return c.id === id;
        })
      : null;

    return rez ? rez.title : "N/A";
  };
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'></th>
              <th scope='col'>Question</th>
              <th scope='col'>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.props.questions && this.props.categories
              ? this.props.questions.map((question) => {
                  return (
                    <tr key={question.id}>
                      <th>{this.props.questions.indexOf(question) + 1}</th>
                      <td>{question.title}</td>
                      <td>{this.findCategory(question.catId)}</td>
                      <td>
                        <button className='btn btn-primary'>Edit</button>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={this.handleDelete} value={question.id}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("categ   " + state.firestore.ordered.categories);
  // console.log("quest   " + state.firestore.ordered.quest);
  return {
    questions: state.firestore.ordered.quest,
    categories: state.firestore.ordered.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "categories" }, { collection: "quest" }])
)(QuestionsList);
