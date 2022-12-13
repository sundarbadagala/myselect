import React, { useContext } from "react";
import { SelectField, Flex } from "../styles";
import { SelectContext } from "../contextApi";
import Navigator from "../elements/navtigators";
import Field from "../elements/field";
import Clear from "../elements/clear";

function SelectHead() {
  const { details, handleFocus, option } = useContext(SelectContext);
  const {
    isDisabled,
    isError,
    headProps,
    styles,
    placeholder = "Seelect",
  } = { ...details };
  const { headStyles } = { ...styles };
  const { startIcon, isChips, isDisplayAll, isClearable, chipType } = {
    ...headProps,
  };

  const handleNone = () => {};
  const handleActive = (e) => {
    e.stopPropagation();
    handleFocus();
  };
  return (
    <>
      <SelectField
        isDisabled={isDisabled}
        isError={isError}
        style={headStyles}
        className="nspira__select--single-select--head"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.code === "ArrowDown") {
            !isDisabled && handleFocus();
          }
        }}
        onClick={isDisabled ? handleNone : handleActive}
        gridWidth={0}
      >
        <Flex styles={{ justifyContent: "flex-start" }} className='nspira__select--single-select--option-field'>
          {startIcon}
          <Field
            data={option?.length ? [option] : []}
            placeholder={placeholder}
            isChips={isChips}
            isDisplayAll={isDisplayAll}
            chipType={chipType}
          />
        </Flex>
        <Flex className="nspira__select--single-select--icons-wrapper">
          {isClearable && <Clear />}
          <Navigator />
        </Flex>
      </SelectField>
    </>
  );
}

export default SelectHead;
