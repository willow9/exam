import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

//TODO implement exam editing and removing funcionality, center text in td's verticaly for exams field

class ExamsList extends Component {
  constructor(props) {
    super(props);

    this.createDataStruct = this.createDataStruct.bind(this);
  }

  createDataStruct() {
    const exams = this.props.exams ? this.props.exams : [];
    const questions = this.props.questions ? this.props.questions : [];

    let examsWithQuestions = [];
    exams.forEach((e) => {
      let exam = {};
      exam.title = e.title;
      let quest = [];
      e.questionIds.forEach((a) => {
        questions.forEach((q) => {
          if (q.id === a) {
            quest.push({ qTitle: q.title, qId: q.id });
          }
          return quest;
        });
      });
      exam.questions = quest;
      examsWithQuestions.push(exam);
    });
    console.log(examsWithQuestions);
    return examsWithQuestions;
  }

  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Exam</th>
            <th scope='col'>Questions</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {this.createDataStruct().map((item) => {
            return (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>
                  <ul className='list-group'>
                    {item.questions.map((q) => {
                      return <li key={q.qId}>{q.qTitle}</li>;
                    })}
                  </ul>
                </td>
                <td>
                  <button className='btn btn-outline-primary btn-sm edit-btn'>Edit</button>
                </td>
                <td>
                  <button className='btn btn-outline-danger btn-sm'>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.firestore.ordered.quest,
    exams: state.firestore.ordered.exams,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "exams" }, { collection: "quest" }])
)(ExamsList);
