import React from "react";
import { Chip, Icon } from "../styles";
import CloseIcon from "../assets/close.svg";

function ChipLabel({ children, obj, onUnselect, type }) {
  return (
    <Chip type={type}>
      <div className='nspira__select--chip-title'>{children}</div>
      <div
        onClick={(e) => onUnselect(e, false, obj, obj?.idx)}
        className="nspira__select--chip-close"
      >
        <Icon src={CloseIcon} alt="close"/>
      </div>
    </Chip>
  );
}

export default ChipLabel;
