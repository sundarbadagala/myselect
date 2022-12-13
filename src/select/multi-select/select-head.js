import React, { useContext } from "react";
import { SelectField, Flex } from "../styles";
import { SelectContext } from "../contextApi";
import { getLabels } from "../helpers";
import Navigator from "../elements/navtigators";
import Counter from "../elements/count";
import Field from "../elements/field";
import Clear from "../elements/clear";

function SelectHead() {
  const { details, handleFocus, checkedOptions } = useContext(SelectContext);
  const {
    isDisabled,
    isError,
    headProps,
    styles,
    placeholder = "Select",
    label = "label",
  } = { ...details };
  const { headStyles } = { ...styles };
  const { startIcon, isChips, isDisplayAll, isClearable, chipType } = {
    ...headProps,
  };
  const onFocus = (e) => {
    e.stopPropagation();
    handleFocus();
  };
  const handleNone = () => {};
  const { labels } = { ...getLabels(checkedOptions, label) };
  return (
    <>
      <SelectField
        isDisabled={isDisabled}
        isError={isError}
        style={headStyles}
        className="nspira__multi-select--head"
        onClick={isDisabled ? handleNone : (e) => onFocus(e)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.code === "ArrowDown") {
            !isDisabled && handleFocus();
          }
        }}
        tabIndex={0}
        gridWidth={labels?.length > 999 ? 60 : labels?.length > 99 ? 50 : 40}
      >
        <Flex styles={{ justifyContent: "flex-start" }}>
          {startIcon}
          <Field
            data={labels}
            placeholder={placeholder}
            isChips={isChips}
            isDisplayAll={isDisplayAll}
            cData={checkedOptions}
            chipType={chipType}
          />
        </Flex>

        <Flex styles={{ justifyContent: "flex-end" }}>
          <Counter isDisplayAll={isDisplayAll} />
          {isClearable && <Clear type="multi" />}
        </Flex>
        <Navigator />
      </SelectField>
    </>
  );
}

export default SelectHead;
