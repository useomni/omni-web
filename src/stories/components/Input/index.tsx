import { Container } from "./styles";
import { HtmlHTMLAttributes, ReactNode } from "react";
import { MdErrorOutline, MdOutlineCheckCircleOutline } from "react-icons/md";
import { FaLock, FaUserAlt } from "react-icons/fa";

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  focus?: boolean;
  disabled?: boolean;
  feedback?: "error" | "success" | null;
  icon?: "user" | "password" | ReactNode;
  center?: boolean;
};

export const Input = ({
  id,
  label,
  placeholder,
  focus,
  disabled,
  feedback,
  icon,
  center,
  ...rest
}: InputProps & HtmlHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container className={`omni-input ${center && "center"}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <div
        className={`box ${focus && "focus"} ${
          disabled && "disabled"
        } ${feedback} ${icon && "icon"}`}
      >
        {icon === "user" ? (
          <FaUserAlt size={14} />
        ) : icon === "password" ? (
          <FaLock size={14} />
        ) : (
          icon
        )}

        <input
          {...rest}
          name="nome"
          id={id}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>

      {feedback === "error" ? (
        <label htmlFor={id} className="feedback error">
          <MdErrorOutline />
          Ocorreu um Erro
        </label>
      ) : feedback === "success" ? (
        <label htmlFor={id} className="feedback success">
          <MdOutlineCheckCircleOutline />
          Sucesso!
        </label>
      ) : null}
    </Container>
  );
};
