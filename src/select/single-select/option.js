import React, { useContext, useEffect } from "react";
import { SingleOption } from "../styles";
import { SelectContext } from "../contextApi";
import { getLabelStyles } from "../helpers";

function Options({
  item,
  id,
  handleSelect,
  isHighlight,
  label,
  activeId,
  style,
  listWidth,
}) {
  const { details } = useContext(SelectContext);
  const { customLabel, styles } = { ...details };
  const { labelStyles } = { ...styles };
  const { defaultStyles, selectStyles, hoverStyles } = getLabelStyles(styles);
  const callback = (item) => {
    handleSelect(item, item._id);
  };
  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("nspira_select"));
    const el = document.getElementsByClassName("nspira__select--single-select--label");
    for (let i = 0; i < el.length; i++) {
      const fontVal = el[i].style.fontSize;
      const txtWidth = fontVal
        ? el[i].textContent.length * fontVal
        : el[i].textContent.length * 9;
      if (val < txtWidth) {
        localStorage.setItem("nspira_select", JSON.stringify(txtWidth));
      }
    }
  }, []);
  const localWidth = JSON.parse(localStorage.getItem("nspira_select"));
  return (
    <>
      {customLabel ? (
        customLabel(item, callback, style)
      ) : (
        <SingleOption
          onClick={() => handleSelect(item, id)}
          isHighlight={isHighlight}
          activeId={activeId}
          style={{
            ...style,
            width: `${listWidth > localWidth ? "100%" : `${localWidth}px`}`,
            ...labelStyles,
          }}
          dStyles={defaultStyles}
          sStyles={selectStyles}
          hStyles={hoverStyles}
          className="nspira__select--single-select--label"
        >
          {item[label]}
        </SingleOption>
      )}
    </>
  );
}

export default Options;
