import React, { useState } from "react";
import "./ToggleableSubheading.css";

interface Props {
  title: string;
  children: any;
  value: boolean;
}

const ToggleableSubheading: React.FC<Props> = ({ title, children, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggleable-subheading">
      <div onClick={handleClick} className="toggleable-subheading-header">
        <div className="toggleable-subheading-title-container">
          <span className="toggleable-subheading-icon">{isOpen ? "-" : "+"}</span>
          <h2 className="toggleable-subheading-title">{title}</h2>
        </div>
        <div className="toggleable-subheading-scroller">
          <div className={`toggleable-subheading-indicator ${value ? "true" : "false"}`} />
          <div className="toggleable-subheading-scrollbar" />
        </div>
      </div>
      {isOpen && <div className="toggleable-subheading-content">{children}</div>}
    </div>
  );
};

export default ToggleableSubheading;
