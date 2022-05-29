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
    padding: 8px 16px;
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${Colors.neutralLight20};
    transition: background-color 5000s ease-in-out 0s;
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
