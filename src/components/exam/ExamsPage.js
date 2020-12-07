import React from "react";
import AddExam from "./AddExam";
import ExamsList from "./ExamsList";

export default function Exams() {
  return (
    <div>
      <div className='container '>
        <div className='row'>
          <div className='col-sm-8'>
            <ExamsList />
          </div>

          <div className='col-sm-4'>
            <AddExam />
          </div>
        </div>
      </div>
    </div>
  );
}
