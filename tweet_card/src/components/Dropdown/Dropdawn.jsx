import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
  DropdownArrow,
} from "./Dropdawn.styled";

const Dropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: "Show all", label: "Show All" },
    { value: "Follow", label: "Follow" },
    { value: "Following", label: "Following" },
  ];

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleDropdownToggle}>
        {value}
        <DropdownArrow isOpen={isOpen} />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
