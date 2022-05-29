import { HtmlHTMLAttributes, HTMLProps, ReactNode } from "react";
import { Container } from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ButtonProps = {
  children: ReactNode | any;
  variant: "filled" | "outline";
  semantic?: "positive" | "negative" | "none";
  disabled?: boolean;
  hug?: boolean;
  rowReverse?: boolean;
  loading?: boolean;
};

export const Button = ({
  children = "button",
  variant = "filled",
  disabled,
  hug,
  rowReverse = false,
  semantic,
  loading,
  ...rest
}: ButtonProps & HtmlHTMLAttributes<HTMLButtonElement>) => {
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
        children
      )}
    </Container>
  );
};
