import styled from "styled-components";
import { Typography } from "../../tokens/Typography";
import { Colors } from "../../tokens/Colors";

export const Container = styled.label`
  ${Typography.roboto.import}

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  font-size: 0.9em;
  font-family: ${Typography.roboto.family};
  font-weight: 500;
  color: ${Colors.massiveNeutral40};

  input {
    display: none;

    &:checked ~ .box {
      background: ${Colors.massivePrimary60};

      svg {
        display: block;
      }
    }
  }

  .box {
    width: 1.25em;
    height: 1.25em;
    background: ${Colors.neutralDark90};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    box-shadow: inset 0 0 0 1.4px ${Colors.massivePrimary40};

    svg {
      display: none;
      font-size: 1em;
      color: ${Colors.neutralLight10};
    }
  }
`;
