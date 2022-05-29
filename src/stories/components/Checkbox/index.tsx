import { Container } from "./styled";
import { FiCheck } from "react-icons/fi";
import { HtmlHTMLAttributes, ReactNode } from "react";

type CheckboxProps = {
  id: string;
  children: ReactNode | any;
  checked?: boolean;
};

export const Checkbox = ({
  id,
  children,
  checked,
  ...rest
}: CheckboxProps & HtmlHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container htmlFor={id} className="omni-checkbox">
      <input type="checkbox" checked={checked} id={id} {...rest} />

      <span className="box">
        <FiCheck />
      </span>

      <span>{children}</span>
    </Container>
  );
};
