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

const ButtonPrimary = ({
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
      className={` px-8 py-3 shadow-md rounded-md flex items-center gap-2 transition-all delay-300 ease-in-out ${className}`}
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

export default ButtonPrimary;
