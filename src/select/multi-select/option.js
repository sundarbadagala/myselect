import React, { useContext, useEffect } from "react";
import { MultiOption, CheckBox, CheckBoxContainer } from "../styles";
import { SelectContext } from "../contextApi";
import { getCheckBoxStyles, getLabelStyles, getClipPath } from "../helpers";

function Options({
  item,
  id,
  isChecked,
  handleCheck,
  label,
  style,
  activeId,
  listWidth,
}) {
  const { details } = useContext(SelectContext);
  const { customLabel, styles, checkBoxProps } = { ...details };
  const { labelStyles } = { ...styles };
  const { defaultStyles, selectStyles } = getCheckBoxStyles(styles);
  const {
    defaultStyles: lDS,
    selectStyles: lSS,
    hoverStyles: lHS,
  } = getLabelStyles(styles);
  const clippath = getClipPath(checkBoxProps);
  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("nspira_select"));
    const el = document.getElementsByClassName("nspira__select--multi-select--label");
    for (let i = 0; i < el.length; i++) {
      const txtWidth = el[i].textContent.length * 11;
      if (val < txtWidth) {
        localStorage.setItem("nspira_select", JSON.stringify(txtWidth));
      }
    }
  }, []);
  const localWidth = JSON.parse(localStorage.getItem("nspira_select"));
  const defaultLabel = () => {
    return (
      <MultiOption
        isChecked={isChecked}
        activeId={activeId}
        style={{
          ...style,
          width: `${listWidth > localWidth ? "100%" : `${localWidth}px`}`,
          ...labelStyles,
        }}
        dStyles={lDS}
        sStyles={lSS}
        hStyles={lHS}
        className="nspira__select--multi-select--label"
      >
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            checked={isChecked}
            onChange={(e) => handleCheck(e.target.checked, item, id)}
            id={item[label]}
            value={item[label]}
            onKeyDown={(e) => handleCheck(e.target.checked, item, id)}
            dStyles={defaultStyles}
            sStyles={selectStyles}
            clippath={clippath}
            className="nspira__select--multi-select--checkbox"
          />
        </CheckBoxContainer>
        {item[label]}
      </MultiOption>
    );
  };
  const callback = (item) => {
    const { isChecked, idx } = { ...item };
    handleCheck(!isChecked, item, idx);
  };
  return (
    <>{customLabel ? customLabel(item, callback, style) : defaultLabel()}</>
  );
}

export default Options;
