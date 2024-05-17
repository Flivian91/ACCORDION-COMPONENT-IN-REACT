import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Searchbar from "../component/Searchbar";
import QuestionArea from "../component/QuestionArea";
import SortArea from "../component/SortArea";
import CreateQuiz from "../component/CreateQuiz";
import { questions } from "./quiz";
import Overlay from "../component/Overlay";
import Form from "../component/Form";
import Bookmark from "../component/Bookmark";
import BookMarkArea from "../component/BookMarkArea";

export default function Home() {
  const [bookMark, setBookMark] = useState([]);
  const [quizItems, setQuizItems] = useState(questions);
  const [sortBy, setSortBy] = useState("ascending");
  const [searchQuiz, setSearchQuiz] = useState("");
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleBookMark, setToggleBookMark] = useState(false);
  let sortedItem;

  // Handle toggle on the plus
  function handleToggle(id) {
    setQuizItems(
      quizItems.map((quiz) =>
        quiz.id === id ? { ...quiz, seen: !quiz.seen } : quiz
      )
    );
  }
  // Function to handle bookmark
  function handleAddBookmMark(id) {
    const newBookmark = quizItems.find((bookmark) => bookmark.id === id);
    setBookMark((prevState) => [...prevState, newBookmark]);
    setQuizItems(
      quizItems.map((bookM) =>
        bookM.id === id ? { ...bookM, bookmark: !bookM.bookmark } : bookM
      )
    );
  }

  if (sortBy === "ascending") sortedItem = quizItems;
  if (sortBy === "descending") {
    sortedItem = quizItems.slice().sort((a, b) => b.id - a.id);
  }
  if (sortBy === "bookmark") {
    sortedItem = quizItems
      .slice()
      .sort((a, b) => Number(b.bookmark) - Number(a.bookmark));
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    filterItems(sortedItem, searchQuiz);
    if (searchQuiz === "") {
      setQuizItems(questions);
    }
  }
  // Search functionalities
  function filterItems(arr, query) {
    const results = arr.filter((el) =>
      el.question.toLowerCase().includes(query.toLowerCase())
    );
    setQuizItems(results);
  }
  function handleChangeSearch(e) {
    setSearchQuiz(e.target.value);
    filterItems(sortedItem, searchQuiz);
  }
  // Handle Delete Functionalities on the bookmark
  function handleDelete(id) {
    const deleteItem = bookMark.filter((book) => book.id !== id);
    setBookMark((prevState) => prevState.filter((book) => book.id !== id));
  }
  return (
    <div className="px-48 bg-gray-200 flex flex-col gap-2 items-center w-full h-full">
      <CreateQuiz setToggleModel={setToggleModel} />
      {toggleModel ? <Overlay setToggleModel={setToggleModel} /> : null}
      {toggleModel ? (
        <Form setToggleModel={setToggleModel} setQuizItems={setQuizItems} />
      ) : null}
      <Navbar />
      <Bookmark setToggleBookMark={setToggleBookMark} />
      {toggleBookMark ? (
        <BookMarkArea
          bookMark={bookMark}
          onDelete={handleDelete}
          setToggleBookMark={setToggleBookMark}
        />
      ) : null}
      <Searchbar
        onSubmitSearch={handleSubmitSearch}
        searchQuiz={searchQuiz}
        setSearchQuiz={setSearchQuiz}
        onchangeSearch={handleChangeSearch}
      />
      <QuestionArea
        onToggle={handleToggle}
        onAddBookmMark={handleAddBookmMark}
        quizItems={sortedItem}
      />
      <SortArea
        quizItems={quizItems}
        setQuizItems={setQuizItems}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </div>
  );
}
