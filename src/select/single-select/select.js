/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import SelectHead from "./select-head";
import SelectBody from "./select-body";
import { SelectContainer, FocusOutContainer } from "../styles";
import { SelectContext } from "../contextApi";
import {getCustomLabel} from '../helpers'


function SingleSelect() {
  const { details, handleOption, isEnable, handleData, handleFocus } =
    useContext(SelectContext);
  const {
    options = [],
    label = "label",
    value = "",
    keys = "value",
    isDisabled = false,
    customLabel,
  } = { ...details };
  useEffect(() => {
    if (options.length) {
      const getData = options?.map((item, index) => ({
        ...item,
        isHighlight: false,
        _id: index,
        customLabel : getCustomLabel(customLabel, item)
      }));
      if (value && label) {
        const obj = getData.filter((item) => value === item[keys]);
        getData[obj[0]?._id] = { ...obj[0], isHighlight: true };
        handleData(getData);
        if (customLabel) {
          const str = getCustomLabel(customLabel, obj[0]);
          handleOption(str);
        } else {
          handleOption(obj[0]?.[label]);
        }
      } else {
        handleData(getData);
        handleOption("");
      }
    } else {
      handleData([]);
      handleOption("");
    }
  }, [options, value, label]);

  return (
    <>
      {isEnable && <FocusOutContainer onClick={handleFocus} className='nspira__select--single-select--focus-out'/>}
      <SelectContainer isDisabled={isDisabled} className='nspira__select--single-select--container'>
        <SelectHead />
        {isEnable && <SelectBody />}
      </SelectContainer>
    </>
  );
}

export default SingleSelect;
