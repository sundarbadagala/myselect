import React from "react";
import { NoDataWrapper } from "../styles";

function NoData({ children }) {
  return (
    <NoDataWrapper className="nspira__no-data">
      {children ? children : "No Data"}
    </NoDataWrapper>
  );
}

export default NoData;
