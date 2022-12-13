import React, { useState } from "react";
import { getCustomLabel } from "./helpers/getCustomLabel";

const SelectContext = React.createContext();

function SelectProvider({ children }) {
  const [details, setDetails] = useState({});
  const [option, setOption] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [data, setData] = useState([]);
  const [preId, setPreId] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleDetails = (data) => {
    if (data) {
      setDetails({ ...data });
    }
  };
  const handleOption = (option) => {
    setOption(option);
  };
  const handleCheckedOptions = (opts) => {
    setCheckedOptions(opts);
  };
  const handleIsEnable = (boolean) => {
    setIsEnable(boolean);
  };
  const handleData = (data) => {
    setData(data);
  };
  const handleSingleSelect = (item, id) => {
    const { onChange, keys = "value" } = { ...details };
    onChange(item?.[keys], item);
    const updatedData = [...data];
    updatedData[preId] = { ...data[preId], isHighlight: false };
    updatedData[id] = { ...data[id], isHighlight: true };
    setPreId(id);
    setData(updatedData);
    setIsEnable(false);
  };
  const handleSearch = (key) => {
    setSearchKey(key);
  };
  const getFilterData = () => {
    const { label = "label", searchProps, customLabel } = { ...details };
    const {
      isCaseSensitive = false,
      isTrim = true,
      isMatchFromStart = false,
    } = { ...searchProps };

    if (searchKey.length) {
      if (customLabel) {
        let customData = data.map((item) => {
          const cLabel = getCustomLabel(customLabel, item);
          return { ...item, customLabel: cLabel };
        });
        const trimmedKey = isTrim ? searchKey.trim() : searchKey;
        if (isCaseSensitive && isMatchFromStart) {
          return customData.filter((item) =>
            item.customLabel?.startsWith(trimmedKey)
          );
        } else if (isCaseSensitive && !isMatchFromStart) {
          return customData.filter((item) =>
            item.customLabel?.includes(trimmedKey)
          );
        } else if (!isCaseSensitive && !isMatchFromStart) {
          return customData.filter((item) =>
            item.customLabel?.toLowerCase().includes(trimmedKey.toLowerCase())
          );
        }
      } else {
        const trimmedKey = isTrim ? searchKey.trim() : searchKey;
        if (isCaseSensitive && isMatchFromStart) {
          return data.filter((item) => item[label]?.startsWith(trimmedKey));
        } else if (isCaseSensitive && !isMatchFromStart) {
          return data.filter((item) => item[label]?.includes(trimmedKey));
        } else if (!isCaseSensitive && !isMatchFromStart) {
          return data.filter((item) =>
            item[label]?.toLowerCase().includes(trimmedKey.toLowerCase())
          );
        }
      }
    } else {
      return data;
    }
  };
  const handleFocus = () => {
    setIsEnable((prev) => !prev);
    setSearchKey("");
  };
  const handleCheck = (isChecked, item, id) => {
    const { onChange, keys = "value" } = { ...details };
    const newData = [...data];
    if (isChecked) {
      newData[id] = { ...item, isChecked: true };
      setData(newData);
      const newCheckedData = [...checkedOptions, item];
      setCheckedOptions(newCheckedData);
      onChange(
        newCheckedData.map((item) => item?.[keys]),
        newCheckedData
      );
      const isAllChecked = newData.every((item) => item.isChecked === true);
      if (isAllChecked) {
        handleCheckAll(true);
      }
    } else {
      newData[id] = { ...item, isChecked: false };
      setData(newData);
      const newCheckedData = checkedOptions.filter((item) => item.idx !== id);
      setCheckedOptions(newCheckedData);
      onChange(
        newCheckedData.map((item) => item?.[keys]),
        newCheckedData
      );
      setIsCheckedAll(false);
    }
  };
  const handleCheckAll = (isChecked) => {
    const { onChange, keys = "value" } = { ...details };
    if (isChecked) {
      setData(data.map((item) => ({ ...item, isChecked: true })));
      setCheckedOptions(data);
      onChange(
        data.map((item) => item?.[keys]),
        data
      );
      setIsCheckedAll(true);
    } else {
      setData(data.map((item) => ({ ...item, isChecked: false })));
      setCheckedOptions([]);
      onChange([]);
      setIsCheckedAll(false);
    }
  };
  const handleIsCheckedAll = (boolean) => {
    setIsCheckedAll(boolean);
  };
  return (
    <SelectContext.Provider
      value={{
        data,
        details,
        option,
        fitlersData: getFilterData(),
        checkedOptions,
        isEnable,
        handleDetails,
        handleOption,
        handleIsEnable,
        handleCheckedOptions,
        handleData,
        handleSingleSelect,
        handleSearch,
        handleFocus,
        handleCheck,
        handleCheckAll,
        searchKey,
        isCheckedAll,
        handleIsCheckedAll
      }}
    >
      {children}
    </SelectContext.Provider>
  );
}

export { SelectContext, SelectProvider };
