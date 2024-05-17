import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
function Searchbar({searchQuiz,onSubmitSearch , onchangeSearch}) {
  return (
    <div className="bg-gray-100 w-full py-4 px-4 shadow rounded grid grid-cols-2 gap-2 items-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-gray-900 font-bold">Questions</h3>
        <p className="text-sm text-gray-500 font-semibold">
          If you don’t find your answer, Please contact us or Leave a Message,
          we’ll be more than happy to assist you.
        </p>
      </div>
      <form onSubmit={onSubmitSearch} className="flex gap-3 justify-between items-center border h-14 pr-4 px-1 bg-white rounded-md">
        <input value={searchQuiz} onChange={onchangeSearch} type="text "placeholder="Search" className=" px-1 h-12 w-full  text-xl focus:outline-none active:outline-none"/>
        <button><CiSearch className="text-3xl" /></button>
      </form>
    </div>
  );
}

export default Searchbar;
