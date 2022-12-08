import React from "react";
import { Tooltip } from "../styles";
import { getPositions } from "../helpers/getPositions";

function CheckedList({ positions, list, handleDisplay, inHeight, inSizes }) {
  const { leftHeight, rightHeight, topHeight } = getPositions(
    positions,
    inHeight,
    inSizes,
    list
  );
  return (
    <Tooltip
      top={topHeight}
      left={leftHeight}
      right={rightHeight}
      onBlur={(e) => handleDisplay(e, false)}
      tabIndex={0}
      className='nspira__sleect'
    >
      <input autoFocus />
      {list.length && list.map((item, index) => <div key={index} className='nspira__select--element'>{item}</div>)}
    </Tooltip>
  );
}
export default CheckedList;
