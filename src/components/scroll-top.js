import React, { useContext } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { LayoutContext } from '../components/layout';

export default function ScrollTop() {
  const { emailRef } = useContext(LayoutContext);

  const handleButtonClick = () => {
    emailRef.current.focus();
  };

  return (
    <button className="absolute top-0 right-0" onClick={handleButtonClick}>
        <FaArrowUp className="text-white" />
    </button>
  )
}
