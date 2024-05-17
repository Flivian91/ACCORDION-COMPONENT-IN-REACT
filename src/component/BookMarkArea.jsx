import React from "react";
import { TiTimes } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

function BookMarkArea({ bookMark, onDelete, setToggleBookMark }) {
  return (
    <div className="fixed top-0 left-0 h-full w-1/3 bg-gray-300 shadow-lg px-1 flex flex-col gap-3">
      <div className="flex justify-between items-center px-1 py-2 shadow-md rounded-md">
        <h1 className="text-2xl font-bold font-mono">Bookmarked Questions</h1>
        <button
          onClick={() => setToggleBookMark((prevState) => !prevState)}
          className="text-4xl"
        >
          <TiTimes />
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {bookMark.map((book, i) => (
          <Items key={book.id} book={book} i={i} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
function Items({ book, i, onDelete }) {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-xl font-bold">Q{i + 1}.</span>
      <h1 className="truncate flex-1 text-xl font-bold text-gray-500">
        {book.question}
      </h1>
      <button onClick={() => onDelete(book.id)} className="text-2xl">
        <MdDelete />
      </button>
    </div>
  );
}

export default BookMarkArea;
