import styled from "styled-components";
import { Colors } from "../../tokens/Colors";
import { Typography } from "../../tokens/Typography";

export const Container = styled.div`
  ${Typography.roboto.import}

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: fit-content;
  min-width: 160px;
  font-family: ${Typography.roboto.family};

  label {
    color: ${Colors.massiveNeutral40};
    font-size: 0.8em;
  }

  .box {
    width: 100%;
    padding: 0 16px;
    background: ${Colors.neutralDark90};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: 0.2s ease-in-out;

    &.focus {
      box-shadow: inset 0 0 0 1.4px ${Colors.massivePrimary30};
    }

    &.error {
      box-shadow: inset 0 0 0 1.4px ${Colors.semanticNegative};
    }
  }

  input {
    height: 100%;
    padding: 8px 0;
    flex-grow: 1;
    font-size: 1em;
    background: none;
    outline: none;
    border: none;
    color: ${Colors.neutralLight20};

    &::placeholder {
      color: ${Colors.massiveNeutral50};
    }
  }

  .feedback {
    margin-top: -2px;
    font-size: 0.75em;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 2px;
    animation: feedback 0.2s ease-in;

    svg {
      font-size: 1.1em;
    }

    &.error {
      color: ${Colors.semanticNegative};
    }
  }

  @keyframes feedback {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }
`;
