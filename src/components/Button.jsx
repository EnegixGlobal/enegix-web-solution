import React from "react";

function Button({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <div
      className={`bg-blue-500 text-white  flex items-center justify-center px-4 py-1 rounded-full hover:bg-white border-blue-500 border hover:text-blue-500 transition-all duration-400 ease-in-out cursor-pointer ${className}`}
      type={type}
      {...props}>
      {children}
    </div>
  );
}

export default Button;
