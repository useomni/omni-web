import { Container } from "./styles";
import { MdErrorOutline } from "react-icons/md";
import { HtmlHTMLAttributes } from "react";

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  focus?: boolean;
  error?: boolean;
};

export const Input = ({
  id,
  label,
  placeholder,
  focus,
  error,
  ...rest
}: InputProps & HtmlHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}

      <div className={`box ${focus && "focus"} ${error && "error"}`}>
        <input
          {...rest}
          name="nome"
          id={id}
          type="text"
          placeholder={placeholder}
        />
      </div>

      {error && (
        <label htmlFor={id} className="feedback error">
          <MdErrorOutline />
          Ocorreu um Erro
        </label>
      )}
    </Container>
  );
};
