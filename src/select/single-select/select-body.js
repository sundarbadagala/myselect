import React, { useContext, useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import { ListContainer, OptionContainer, SearchField } from "../styles";
import NoData from "../elements/no-data";
import Option from "./option";
import { SelectContext } from "../contextApi";
import { getStyleHeight } from "../helpers";

function SingleSelectBody() {
  const {
    details,
    handleSingleSelect,
    handleSearch,
    fitlersData: data,
    searchKey,
    handleFocus,
  } = useContext(SelectContext);
  const {
    searchPlaceholder = "Search...",
    label = "label",
    dependencyLabel = "",
    styles,
    customLabel = () => {},
  } = { ...details };
  const { searchStyles, bodyStyles } = { ...styles };
  const customHeight = getStyleHeight(styles, customLabel);
  const [activeId, setActiveId] = useState(0);
  const [listBoxWidth, setListBoxWidth] = useState(0);
  const handleKey = (e) => {
    if (e.key === "ArrowDown" || e.code === "ArrowDown") {
      activeId < data.length && setActiveId((prev) => prev + 1);
    } else if (e.key === "ArrowUp" || e.code === "ArrowUP") {
      activeId > 1 && setActiveId((prev) => prev - 1);
    } else if (e.key === "Enter" || e.code === "Enter") {
      handleSingleSelect(data[activeId - 1], activeId - 1);
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
      "nspira__select--single-select--options"
    );
    setListBoxWidth(oLenght[0].offsetWidth);
    return () => {
      localStorage.removeItem("nspira_select");
    };
  }, []);
  const Row = ({ index, style }) => {
    const item = { ...data[index] };
    return (
      <Option
        item={item}
        id={item._id}
        handleSelect={handleSingleSelect}
        isHighlight={item.isHighlight}
        label={label}
        activeId={activeId}
        style={style}
        listWidth={listBoxWidth}
      />
    );
  };

  return (
    <>
      <ListContainer className="nspira__select--single-select--body">
        <SearchField
          type="text"
          onChange={handleChange}
          value={searchKey}
          autoFocus
          placeholder={searchPlaceholder}
          onKeyDown={(e) => handleKey(e)}
          style={searchStyles}
          className="nspira__select--single-select--search"
        />
        <OptionContainer
          style={{ ...bodyStyles }}
          className="nspira__select--single-select--options"
        >
          {data?.length ? (
            <FixedSizeList
              height={data.length < 10 ? data.length * 40 : 400}
              itemSize={customHeight}
              itemCount={data.length}
            >
              {Row}
            </FixedSizeList>
          ) : (
            <NoData>{dependencyLabel}</NoData>
          )}
        </OptionContainer>
      </ListContainer>
    </>
  );
}

export default SingleSelectBody;
