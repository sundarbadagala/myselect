export const getStyleHeight = (styles, customLabel) => {
  const { labelStyles } = { ...styles };
  const { height } = { ...labelStyles };
  const { props } = { ...customLabel({ isHighlight: false }) };
  const { style } = { ...props };
  return style?.height
    ? parseInt(style?.height, 10)
    : height
    ? parseInt(height, 10)
    : 40;
};
