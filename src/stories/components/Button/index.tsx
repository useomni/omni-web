import { ReactNode } from "react";
import { Container } from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ButtonProps = {
  label?: string | ReactNode;
  variant: "filled" | "outline";
  semantic?: "positive" | "negative" | "none";
  disabled?: boolean;
  hug?: boolean;
  rowReverse?: boolean;
  loading?: boolean;
};

export const Button = ({
  label = "button",
  variant = "filled",
  disabled,
  hug,
  rowReverse = false,
  semantic,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      {...rest}
      disabled={disabled}
      className={`omni-button ${hug && "hug"} ${
        rowReverse && "invert"
      } ${variant} ${semantic}`}
    >
      {loading ? (
        <AiOutlineLoading3Quarters
          className="spinner"
          size={16}
          color="#E1E1E6"
        />
      ) : (
        label
      )}
    </Container>
  );
};
