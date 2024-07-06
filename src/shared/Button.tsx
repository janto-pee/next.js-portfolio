"use client";
import React from "react";

export interface ButtonInterface {
  className?: string;
  text?: string | number;
  type: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  childrenClass?: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
  style?: any;
}

const Button = ({
  className,
  type,
  onClick,
  disabled,
  children,
  style,
  text,
}: ButtonInterface) => {
  return (
    <button
      className={`transition-all ease-in-out delay-300 cursor-pointer ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text && text}
      {children && children}
    </button>
  );
};

export default Button;
