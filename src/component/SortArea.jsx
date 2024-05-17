import React, { useState } from "react";
import { questions } from "../pages/quiz";

function SortArea({ quizItems, setQuizItems,sortBy, setSortBy }) {
  return (
    <div className="py-12 flex items-center gap-5">
      <select
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        className=" border border-gray-500 rounded focus:outline-none px-1 py-2 text-lg"
      >
        <option value="ascending">Sort ascending order</option>
        <option value="descending">Sort descending order</option>
        <option value="bookmark">Sort bookmark</option>
      </select>
      <button onClick={()=> setSortBy('ascending')} className="text-xl bg-pink-600 text-white rounded-md px-5 py-2">
        Clear sort
      </button>
    </div>
  );
}

export default SortArea;
