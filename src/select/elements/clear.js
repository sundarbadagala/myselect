import React, { useContext } from "react";
import CloseIcon from "../assets/close.svg";
import { SelectContext } from "../contextApi";

function Clear({ type }) {
  const { handleOption, handleCheckAll } = useContext(SelectContext);
  const handleClear = (e) => {
    e.stopPropagation();
    switch (type) {
      case "multi":
        handleCheckAll(false);
        return;
      default:
        handleOption("");
        return;
    }
  };
  return (
    <>
      <img src={CloseIcon} alt="" style={{width:'1rem'}} onClick={handleClear} className='nspira__select--clear'/>
    </>
  );
}

export default Clear;
