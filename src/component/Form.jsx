import React, { useState } from "react";
import { TiTimes } from "react-icons/ti";
import { questions } from "../pages/quiz";
import { v4 as uuidv4 } from "uuid";
import { PiSpinner } from "react-icons/pi";

function Form({setQuizItems, setToggleModel}) {
  const [questionInput, setQuestionInput] = useState("");
  const [answerInput, setanswerInput] = useState("");
  function handleSubmitForm(e) {
    e.preventDefault();
    const newItems = {
      id: uuidv4(),
      question: questionInput,
      answer: answerInput,
      seen: false,
      bookmark: false,
    };
    console.log(newItems);
    setQuizItems(prevState => [...prevState, newItems])
    setanswerInput("")
    setQuestionInput("")
    setToggleModel(prevState => !prevState)
  }

  return (
    <form
      onSubmit={handleSubmitForm}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 rounded-md -translate-y-1/2 w-1/2 bg-gray-100 z-30 shadow-lg px-5 flex flex-col gap-5 py-10"
    >
      <div className="relative">
        <button
          onClick={() => setToggleModel((prevstate) => !prevstate)}
          className="text-4xl absolute -top-5 -right-1"
        >
          <TiTimes />
        </button>
      </div>
      <h1 className="text-center text-3xl font-mono font-bold">
        Compose your Question Now
      </h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="qustion" className="text-xl ">
          Question
        </label>
        <input
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
          type="text"
          id="question"
          className=" px-1 w-full rounded-md py-2  text-xl focus:outline-none active:outline-none"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="answer" className="text-xl">
          Answer
        </label>
        <textarea
          value={answerInput}
          onChange={(e) => setanswerInput(e.target.value)}
          cols="30"
          rows="10"
          className=" px-1 h-12 w-full  text-xl focus:outline-none active:outline-none"
          id="answer"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-8 p-2 text-2xl bg-indigo-600 items-center text-white flex justify-center gap-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
