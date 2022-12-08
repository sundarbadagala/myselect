import React, { useContext, useState } from "react";
import { SelectField, Text, IconWrapper, Count, MultiIconWrapper } from "../styles";
import Tooltip from "../elements/tooltip";
import UpArrow from "../assets/up_arrow.svg";
import DownArrow from "../assets/down_arrow.svg";
import { SelectContext } from "../contextApi";
import { getLabels } from "../helpers";

function SelectHead() {
  const { details, isEnable, checkedOptions, handleFocus } =
    useContext(SelectContext);
  const {
    isDisabled,
    isError,
    placeholder = "Select",
    label = "label",
    headProps,
    styles,
  } = { ...details };
  const { headStyles } = { ...styles };
  const { downIcon, upIcon, startIcon } = { ...headProps };
  const [isDisplay, setIsDisplay] = useState(false);
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [inHeight, setInHeight] = useState(0);
  const [inSizes, setInSizes] = useState({ x: 0, y: 0 });

  const handleDisplay = (e, condition) => {
    e.stopPropagation();
    setPositions({ x: e.clientX, y: e.clientY });
    setIsDisplay(condition);
    setInHeight(window.innerHeight);
    setInSizes({ y: window.innerHeight, x: window.innerWidth });
  };
  const { labels } = { ...getLabels(checkedOptions, label) };
  return (
    <>
      <SelectField
        isDisabled={isDisabled}
        isError={isError}
        style={headStyles}
        className="nspira__multi-select--head"
      >
        {startIcon}
        <Text
          type="text"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" || e.code === "ArrowDown") {
              handleFocus();
            }
          }}
          onClick={handleFocus}
          defaultValue={labels?.[0]}
          tabIndex={0}
          placeholder={placeholder}
          disabled={isDisabled}
          isDisabled={isDisabled}
          isError={isError}
          className="nspira__multi-select--text"
        />
        <IconWrapper className="nspira__multi-select--icon-wrapper">
          <Count onClick={(e) => handleDisplay(e, true)} className='nspira__multi-select--count'>
            {checkedOptions.length > 1 && `+${checkedOptions.length - 1}`}
          </Count>
          <MultiIconWrapper className="nspira__multi-select--icon">
            {isEnable ? (
              upIcon ? (
                upIcon
              ) : (
                <img src={UpArrow} alt="up arrow" />
              )
            ) : downIcon ? (
              downIcon
            ) : (
              <img src={DownArrow} alt="down arrow" />
            )}
          </MultiIconWrapper>
        </IconWrapper>
      </SelectField>
      {isDisplay && (
        <Tooltip
          positions={positions}
          list={labels}
          handleDisplay={handleDisplay}
          inHeight={inHeight}
          inSizes={inSizes}
        />
      )}
    </>
  );
}

export default SelectHead;
