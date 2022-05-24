import { Container } from "./styled";
import { FiCheck } from "react-icons/fi";

type CheckboxProps = {
  id: string;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
};

export const Checkbox = ({
  id,
  label,
  checked,
  defaultChecked,
}: CheckboxProps) => {
  return (
    <Container htmlFor={id} className="omni-checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
      />

      <span className="box">
        <FiCheck />
      </span>

      <span>{label}</span>
    </Container>
  );
};
