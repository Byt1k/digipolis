import React, { HTMLAttributes } from "react";
import s from "./button.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}) => {
  return (
    <button className={classNames(s.btn, s[variant], className)} {...props} disabled={disabled}>
      {children}
    </button>
  );
};
