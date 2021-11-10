import React from "react";
import Button from "./button";

const Header = ({ title, toggleAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "black"}
        buttonClick={() => toggleAdd()}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

export default Header;
