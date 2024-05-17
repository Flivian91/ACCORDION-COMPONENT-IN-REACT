import React from "react";
import { MdBookmarks } from "react-icons/md";

function Bookmark({setToggleBookMark}) {
  return (
    <div className="fixed top-2 left-1">
      <button onClick={()=> setToggleBookMark(prevState => !prevState)} className="text-4xl text-indigo-600"><MdBookmarks /></button>
    </div> 
  );
}


export default Bookmark;
