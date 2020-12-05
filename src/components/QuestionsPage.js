import React from "react";
import AddQuestion from "./AddQuestion";
import QuestionsList from "./QuestionsList";

export default function QuestionsPage() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <QuestionsList />
          </div>

          <div className='col-sm-6'>
            <AddQuestion />
          </div>
        </div>
      </div>
    </div>
  );
}
