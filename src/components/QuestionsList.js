import { connect } from "react-redux";
import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteQuestion } from "./../store/actions/categoriesActions";

class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (e) => {
    console.log(e.target.value);
    this.props.deleteQuestion(e.target.value);
  };
  render() {
    return (
      <div>
        <table className='table'>
          <tbody>
            {this.props.questions
              ? this.props.questions.map((question) => {
                  return (
                    <tr key={question.id}>
                      <th>{this.props.questions.indexOf(question) + 1}</th>
                      <td>{question.title}</td>
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
  console.log(state.firestore.ordered.quest);
  return {
    questions: state.firestore.ordered.quest,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "quest" }])
)(QuestionsList);
