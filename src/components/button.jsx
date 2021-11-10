import PropTypes from "prop-types";
import React from "react";

const Button = ({ text, buttonClick, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={buttonClick}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
