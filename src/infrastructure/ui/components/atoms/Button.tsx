import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const baseStyle =
    "text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  const variantStyles = {
    primary: "bg-blue-700 hover:bg-blue-800",
    secondary: "bg-gray-500 hover:bg-gray-700",
  };
  const className = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
