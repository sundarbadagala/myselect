export const getPositions = (positions, inHeight, inSizes, list) => {
  const listHeight = list?.length * 40;
  const bottomHeight = inHeight - positions?.y;
  const topHeight =
    bottomHeight < listHeight &&
    (inHeight - listHeight > 64 ? inHeight - listHeight : 64);
  const leftHeight = inSizes?.x - positions?.x > 100 && positions?.x - 50;
  const rightHeight = inSizes?.x - positions?.x < 100 && 0;

  return { leftHeight, rightHeight, topHeight, bottomHeight };
};
