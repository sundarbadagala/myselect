import React, { useContext } from "react";
import { SelectField, Text, IconWrapper } from "../styles";
import UpArrow from "../assets/up_arrow.svg";
import DownArrow from "../assets/down_arrow.svg";
import { SelectContext } from "../contextApi";

function SelectHead() {
  const { option, details, isEnable, handleFocus } = useContext(SelectContext);
  const {
    isDisabled,
    isError,
    placeholder = "Select",
    headProps,
    styles,
  } = { ...details };
  const { headStyles } = { ...styles };
  const { downIcon, upIcon, startIcon } = { ...headProps };

  const handleNone = () => {};
  return (
    <>
      <SelectField
        isDisabled={isDisabled}
        isError={isError}
        style={headStyles}
        className="nspira__single-select--head"
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
          defaultValue={option}
          tabIndex={0}
          placeholder={placeholder}
          disabled={isDisabled}
          isDisabled={isDisabled}
          isError={isError}
          className="nspira__single-select--text"
        />
        <IconWrapper
          onClick={isDisabled ? handleNone : handleFocus}
          className="nspira__single-select--icon"
        >
          {isEnable ? (
            upIcon ? (
              upIcon
            ) : (
              <img src={UpArrow} alt="up arrow" style={{ marginLeft: "5px" }} />
            )
          ) : downIcon ? (
            downIcon
          ) : (
            <img
              src={DownArrow}
              alt="down arrow"
              style={{ marginLeft: "5px" }}
            />
          )}
        </IconWrapper>
      </SelectField>
    </>
  );
}

export default SelectHead;
