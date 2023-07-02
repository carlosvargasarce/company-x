import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  
  return (
    <button className="absolute top-0 right-0">
        <FaArrowUp className="text-white" />
    </button>
  )
}
