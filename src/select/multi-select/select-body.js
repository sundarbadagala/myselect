import React, { useContext, useState, useEffect } from "react";
import { FixedSizeList } from "react-window";
import { ListContainer, OptionContainer, SearchField } from "../styles";
import NoData from "../elements/no-data";
import Option from "./option";
import { SelectContext } from "../contextApi";
import SelectAll from "../elements/select-all";
import { getStyleHeight } from "../helpers";

function MultiSelectBody() {
  const {
    details,
    handleSearch,
    fitlersData: filterData,
    searchKey,
    handleFocus,
    handleCheck,
    handleCheckAll,
    isCheckedAll,
  } = useContext(SelectContext);
  const {
    label = "label",
    dependencyLabel,
    customLabel = () => {},
    styles,
  } = { ...details };
  const { searchStyles, bodyStyles } = { ...styles };
  const customHeight = getStyleHeight(styles, customLabel);
  const { searchPlaceholder } = { ...details };
  const [activeId, setActiveId] = useState(-1);
  const [listBoxWidth, setListBoxWidth] = useState(0);
  const handleEnterSelect = () => {
    if (activeId.toString() === "0") {
      handleCheckAll(!isCheckedAll);
    } else {
      const item = { ...filterData[activeId - 1] };
      const isChecked = !item?.isChecked;
      handleCheck(isChecked, item, item?.idx);
    }
  };
  const handleKey = (e) => {
    if (e.key === "ArrowDown" || e.code === "ArrowDown") {
      activeId < filterData.length && setActiveId((prev) => prev + 1);
    } else if (e.key === "ArrowUp" || e.code === "ArrowUP") {
      activeId > -1 && setActiveId((prev) => prev - 1);
    } else if (e.key === "Enter" || e.code === "Enter") {
      handleEnterSelect();
    } else if (e.key === "Escape" || e.code === "Escape") {
      handleFocus();
    } else if (e.key === "Tab" || e.code === "Tab") {
      handleFocus();
    }
  };
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };
  useEffect(() => {
    const oLenght = document.getElementsByClassName(
      "nspira__select--multi-select--options"
    );
    setListBoxWidth(oLenght[0].offsetWidth);
    return () => {
      localStorage.removeItem("nspira_select");
    };
  }, []);
  const Row = ({ index, style }) => {
    const item = { ...filterData[index] };
    return (
      <Option
        item={item}
        id={item.idx}
        handleCheck={handleCheck}
        isChecked={item.isChecked}
        label={label}
        key={item.idx}
        activeId={activeId}
        style={style}
        handleCheckAll={handleCheckAll}
        listWidth={listBoxWidth}
      />
    );
  };
  return (
    <>
      <ListContainer className="nspira__select--multi-select--body">
        <SearchField
          onChange={handleChange}
          value={searchKey}
          autoFocus
          placeholder={searchPlaceholder ? searchPlaceholder : "Search..."}
          onKeyDown={handleKey}
          style={searchStyles}
          className="nspira__select--multi-select--search"
        />
        <OptionContainer
          style={bodyStyles}
          className="nspira__select--multi-select--options"
        >
          {filterData.length ? (
            <>
              {searchKey === "" && (
                <SelectAll id={filterData?.length + 1} activeId={activeId} listWidth={listBoxWidth}/>
              )}
              <FixedSizeList
                height={filterData.length < 9 ? filterData.length * 40 : 360}
                itemSize={customHeight}
                itemCount={filterData.length}
              >
                {Row}
              </FixedSizeList>
            </>
          ) : (
            <NoData>{dependencyLabel}</NoData>
          )}
        </OptionContainer>
      </ListContainer>
    </>
  );
}
export default MultiSelectBody;
