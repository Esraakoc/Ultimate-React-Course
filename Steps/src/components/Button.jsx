import React from "react";
import "../styles/steps.css";

function Button({textColor, bgColor, onClick, children}) {
  return (
    <button
      style={{background: bgColor, color: textColor}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
