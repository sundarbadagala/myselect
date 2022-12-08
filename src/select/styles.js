import styled from "styled-components";
import { colors } from "./helpers";

export const SelectContainer = styled.div`
  width: inherit;
  position: relative;
  background-color: transparent;
`;

export const SelectField = styled.div`
  width: inherit;
  height: 40px;
  border: 1px solid ${({ isError }) => (isError ? colors.error : colors.border)};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${({ isEnable }) => (isEnable ? 91 : 0)};
  padding: 0 8px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};
  gap: 5px;
`;
export const Text = styled.input`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 96%;
  border: none;
  outline: none;
  z-index: 1;
  font-size: 16px;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  background-color: transparent;
  color: ${({ isError }) => (isError ? `${colors.error}` : `${colors.dark}`)};

  &::placeholder {
    font-size: 16px;
    color: ${({ isError }) =>
      isError ? `${colors.error}` : `RGB(117, 117, 117)`};
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
  /* width: calc(100% + 16px); */
  box-shadow: 1px 1px 1px #cecece;
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

export const List = styled.ul`
  padding: 0;
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

export const Tooltip = styled.div`
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
    /* clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%); */
    /* clip-path: circle(40% at 55% 55%) */
  }
  &:checked::before {
    transform: scale(1);
  }
`;

export const NoDataWrapper = styled(SingleOption)`
  color: #a7a8a7;
`;

export const SelectAllWrapper = styled(MultiOption)`
  display: flex;
  align-items: center;
  width: 100%;
  /* overflow:hidden ; */
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

export const Count = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.1rem;
`;

export const MultiIconWrapper = styled.span`
  margin-left: 5px;
`;

export const Chip = styled.div`
  background-color: red;
`;

export const Input = styled.input`
  border: 1px solid red;
`;

export const Label = styled.label`
  background-color: blue;
  &:hover {
    background-color: red;
  }
`;
