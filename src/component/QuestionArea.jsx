import React from "react";

import Questions from "./Questions";
function QuestionArea({onAddBookmMark, onToggle, quizItems}) {
  return (
    <div className="w-full">
      <Questions quizItems={quizItems} onAddBookmMark={onAddBookmMark} onToggle={onToggle} />
    </div>
  );
}

export default QuestionArea;
