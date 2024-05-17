import React, { useState } from "react";
import {
  CiCirclePlus,
  CiCircleMinus,
} from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";

function Questions({ quizItems, onAddBookmMark, onToggle }) {
  return (
    <div className="flex flex-col gap-5">
      {quizItems.map((quiz,i) => (
        <Quiz
          key={quiz.id}
          quiz={quiz}
          index={i + 1}
          onToggle={onToggle}
          onAddBookmMark={onAddBookmMark}
        />
      ))}
    </div>
  );
}
function Quiz({ quiz, onToggle, onAddBookmMark, index }) {
  return (
    <div className="flex flex-col gap-5 px-2 mt-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span className="text-4xl font-bold font-mono text-gray-600">
            Q{index}.
          </span>
          <h1 className="text-2xl text-gray-900 font-bold">{quiz.question}</h1>
        </div>
        <button onClick={() => onToggle(quiz.id)} className="text-3xl">
          {quiz.seen ? <CiCircleMinus /> : <CiCirclePlus />}
        </button>
      </div>
      {quiz.seen ? (
        <div className="mt-0 flex justify-between gap-2">
          <p className="text-lg text-gray-600 font-semibold">{quiz.answer}</p>
          {/* <CiBookmarkMinus /> */}
          <button
            onClick={() => onAddBookmMark(quiz.id)}
            className={`text-3xl ${
              quiz.bookmark ? "text-pink-600" : "text-gray-600"
            } `}
          >
            <FaBookmark />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Questions;
