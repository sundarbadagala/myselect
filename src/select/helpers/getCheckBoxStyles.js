import { getStyleStates } from "./getStyleStates";

const defObj = {
  border: "0.15em solid #cecece",
  borderRadius: "0.15em",
  width: "15px",
  height: "15px",
  backgroundColor: "#ffffff",
  color: "#ffffff",
};
const slctObj = {
  backgroundColor: "#3982f7",
  border: "0.15em solid #3982f7",
};

export const getCheckBoxStyles = (styles) => {
  const { checkBoxStyles } = { ...styles };
  const { defaultStyles, selectStyles } = getStyleStates(
    checkBoxStyles,
    defObj,
    slctObj
  );
  return { defaultStyles, selectStyles };
};
