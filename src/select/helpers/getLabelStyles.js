import { colors } from "./getColors";
import { getStyleStates } from "./getStyleStates";

const defObj = {
  color: colors.dark,
  backgroundColor: colors.lite,
  height:'40px'
};
const slctObj = {
  color: colors.dark,
  backgroundColor: colors.active,
};
const hvrObj = {
  color: colors.dark,
  backgroundColor: colors.hover,
};

export const getLabelStyles = (styles) => {
  const { labelStyles } = { ...styles };
  const { defaultStyles, selectStyles, hoverStyles } = getStyleStates(
    labelStyles,
    defObj,
    slctObj,
    hvrObj
  );
  return { defaultStyles, selectStyles, hoverStyles };
};
