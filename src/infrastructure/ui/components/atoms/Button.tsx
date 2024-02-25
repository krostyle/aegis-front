import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const baseStyle = "btn focus:outline-none focus:shadow-outline";
  const variantStyles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };
  const className = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
