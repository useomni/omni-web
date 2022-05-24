import styled from "styled-components";
import { Colors } from "../../tokens/Colors";
import { Typography } from "../../tokens/Typography";

export const Container = styled.button`
  ${Typography.roboto.import}

  min-width: 120px;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.massiveNeutral10};
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 1em;
  font-family: ${Typography.roboto.family};
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  gap: 8px;

  &.invert {
    flex-direction: row-reverse;
  }

  &.filled {
    background: ${Colors.massivePrimary30};
  }
  &.positive {
    background: ${Colors.semanticPositive};
    color: ${Colors.neutralLight10};
    &.outline {
      box-shadow: inset 0 0 0 2px ${Colors.semanticPositive};
    }
  }
  &.negative {
    background: ${Colors.third20};
    &.outline {
      box-shadow: inset 0 0 0 2px ${Colors.third20};
    }
  }

  &.outline {
    background: none;
    box-shadow: inset 0 0 0 2px ${Colors.massivePrimary30};
  }

  &:disabled {
    &.outline {
      background: none;
      box-shadow: inset 0 0 0 2px ${Colors.massiveNeutral40};
    }
    background: ${Colors.neutralDark70};
    color: ${Colors.massiveNeutral40};
    cursor: default;
  }

  &.hug {
    min-width: auto;
  }

  .spinner {
    animation: spinner 4s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(540deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
`;
