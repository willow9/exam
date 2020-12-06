import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { addExam } from "./../store/actions/categoriesActions";

class AddExam extends Component {
  constructor(props) {
    super(props);

    //TODO uncheck all checkboxes after submit (maybe using refs)

    this.state = { examQuestions: [], title: "" };
    this.togleCheckbox = this.togleCheckbox.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.createDataStruct = this.createDataStruct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  togleCheckbox = (event) => {
    if (event.target.checked) {
      this.setState({ examQuestions: [...this.state.examQuestions, event.target.value] });
    } else {
      const withoutRemovedQuestion = this.state.examQuestions.filter((item) => item !== event.target.value);
      this.setState({ examQuestions: withoutRemovedQuestion });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addExam({ title: this.state.title, questionIds: this.state.examQuestions });
    this.setState({ title: "", examQuestions: [] });
  };
  createDataStruct = () => {
    const categories = this.props.categories ? this.props.categories : [];
    const questions = this.props.questions ? this.props.questions : [];

    let categoriesAndQuestions = [];

    categories.forEach((c) => {
      let caterory = {};
      caterory.title = c.title;
      let quest = [];

      questions.forEach((q) => {
        if (c.id === q.catId) {
          quest.push({ qTitle: q.title, qId: q.id });
        }
        return quest;
      });

      caterory.questions = quest;
      categoriesAndQuestions.push(caterory);
    });

    return categoriesAndQuestions;
  };

  render() {
    return (
      <div>
        <h3>Add Exam</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              required
              type='text'
              className='form-control'
              placeholder='Exam Title'
              onChange={this.handleTitleChange}
              value={this.state.title}
            ></input>
          </div>
          {this.createDataStruct().map((category) => {
            return (
              <div>
                <h5 key={category.title}>{category.title}</h5>
                {category.questions.map((q) => {
                  return (
                    <div className='form-check form-check-inline' key={q.qId}>
                      <input className='form-check-input' type='checkbox' onClick={this.togleCheckbox} value={q.qId} />
                      <label className='form-check-label'>{q.qTitle}</label>
                    </div>
                  );
                })}
              </div>
            );
          })}
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
    questions: state.firestore.ordered.quest,
    categories: state.firestore.ordered.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addExam: (exam) => dispatch(addExam(exam)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "categories" }, { collection: "quest" }])
)(AddExam);
