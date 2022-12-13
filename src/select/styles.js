import styled from "styled-components";
import { colors } from "./theme/theme.colors";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ styles }) => styles}
`;

export const SelectContainer = styled.div`
  width: inherit;
  position: relative;
  background-color: transparent;
`;

export const SelectField = styled.label`
  width: inherit;
  height: 40px;
  border: 1px solid ${({ isError }) => (isError ? colors.error : colors.border)};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  border-radius: 4px;
  display: grid;
  grid-template-columns: calc(100% - 80px) 60px 20px;
  grid-template-columns: ${({ gridWidth }) =>
    `calc(100% - ${gridWidth + 20}px) ${gridWidth}px 20px`};
  align-items: center;
  z-index: ${({ isEnable }) => (isEnable ? 91 : 0)};
  padding: 0 6px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};

  &:focus {
    border:1px solid blue ;
  }
`;

export const SearchField = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.border};
  border-top-right-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 8px;

  &::placeholder {
    font-size: 16px;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  position: absolute;
  box-shadow: 1px 1px 5px ${colors.shadow};
  border-radius: 4px;
  display: block;
  transition: all 5s ease;
  background-color: ${colors.lite};
  z-index: 92;
`;

export const OptionContainer = styled.div`
  width: 100%;
  max-height: 400px;
  background-color: ${colors.lite};
  position: relative;
  box-shadow: 1px 1px 1px ${colors.shadow};
  border-radius: 5px;
`;

export const SingleOption = styled.div`
  cursor: pointer;
  padding: 0 8px;
  text-align: left;
  font-size: 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background-color: ${({ isHighlight = false, dStyles, sStyles }) =>
    isHighlight ? sStyles?.backgroundColor : dStyles?.backgroundColor};
  color: ${({ isHighlight, dStyles, sStyles }) =>
    isHighlight ? sStyles?.color : dStyles?.color};

  &:hover {
    ${({ hStyles }) => hStyles}
  }

  &:nth-child(${({ activeId }) => activeId}) {
    ${({ hStyles }) => hStyles}
  }
`;

export const MultiOption = styled.label`
  padding: 0 8px;
  width: 100%;
  font-size: 16px;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  cursor: pointer;
  white-space: nowrap;
  text-align: left;
  align-items: center;
  ${({ dStyles }) => dStyles}
  color: ${({ isChecked = true, dStyles, sStyles }) =>
    isChecked ? `${sStyles?.color}` : `${dStyles?.color}`};
  background-color: ${({ isChecked, dStyles, sStyles }) =>
    isChecked ? `${sStyles?.backgroundColor}` : `${dStyles?.backgroundColor}`};
  &:hover {
    ${({ hStyles }) => hStyles}
  }

  &:nth-child(${({ activeId }) => activeId}) {
    ${({ hStyles }) => hStyles}
  }
`;

export const FocusOutContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 90;
`;

export const Tooltip = styled.label`
  position: fixed;
  z-index: 10;
  background-color: ${colors.dark};
  color: ${colors.lite};
  opacity: 0.7;
  box-shadow: 1px 5px 5px ${colors.shadow};
  border-radius: 4px;
  min-width: 100px;
  min-height: 40px;
  max-height: 90vh;
  overflow: auto;
  font-size: 12px;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  right: ${({ right }) => `${right}px`};
  z-index: 91;

  input {
    opacity: 0;
    position: absolute;
  }

  div {
    padding: 2px 4px;
  }
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  display: grid;

  ${({ dStyles }) => dStyles}

  &:checked {
    ${({ sStyles }) => sStyles}
  }

  &::before {
    content: "";
    width: 90%;
    height: 90%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${({ dStyles }) => dStyles.color};
    transform-origin: bottom left;
    clip-path: ${({ clippath }) => clippath};
  }
  &:checked::before {
    transform: scale(1);
  }
`;

export const CheckBoxContainer = styled.div`
  width: 15px;
`;

export const NoDataWrapper = styled(SingleOption)`
  color: ${colors.disable};
`;

export const SelectAllWrapper = styled(MultiOption)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 8px;
  background-color: ${({ activeId, isChecked, dStyles, sStyles, hStyles }) =>
    `${
      activeId === 0
        ? hStyles?.backgroundColor
        : isChecked
        ? sStyles?.backgroundColor
        : dStyles.backgroundColor
    }`};

  &:nth-child(${({ activeId }) => activeId}) {
    background-color: ${({ dStyles }) => dStyles.backgroundColor};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const MultiIconWrapper = styled.span`
  margin-left: 5px;
`;

export const Chip = styled.div`
  background-color: ${colors.chip};
  margin: 0 4px;
  border-radius: ${({ type }) => (type === "square" ? "3px" : "20px")};
  position: relative;
  display: flex;
  align-items: center;

  .nspira__select--chip-title {
    padding: 4px 6px;
    min-width: 50px;
    cursor: default;
  }

  .nspira__select--chip-close {
    display: flex;
    border: none;
    outline: none;
    padding: 5px 6px;
    height: 100%;
    cursor: pointer;
    text-align: center;
    width: 30px;
    border-bottom-right-radius: ${({ type }) =>
      type === "square" ? "3px" : "20px"};
    border-top-right-radius: ${({ type }) =>
      type === "square" ? "3px" : "20px"};
    background-color: ${colors.chipClose};

    &:hover {
      backdrop-filter: brightness(20%);
    }
  }
`;

export const ChipLess = styled.span`
  margin-right: 5px;
`;

export const CountButton = styled.label`
  padding: 4px;
`;

export const FieldContainer = styled.div`
  height: inherit;
  width:100%;
  display: ${({isChips}) =>  isChips ? 'flex' : 'block'};
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis ;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  color: ${({ isError, isActive }) =>
    isActive ? "#000000" : isError ? `${colors.error}` : `${colors.placeholder}`};
`;

export const TooltipFocusOutContainer = styled.div`
  background-color: ${colors.dark};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  opacity: 0;
`;

export const Icon = styled.img`
  width: 1rem;
  cursor: pointer;
`;

export const NavIcon = styled(Icon)`
  margin-left: 5px;
`;
