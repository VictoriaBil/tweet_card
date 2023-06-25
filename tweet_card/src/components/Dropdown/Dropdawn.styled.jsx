import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  width: 120px;
  background-color: #fff;
  color: black;
  border: 2px solid #00c2ad;
  padding: 8px 12px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: #3e2d85;
    border: 2px solid #3e2d85;
    outline: none;
  }
`;

export const DropdownArrow = styled.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
  margin-left: auto;
  transition: transform 0.3s ease;

  ${({ isOpen }) => isOpen && "transform: rotate(180deg);"}
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  z-index: 999;
  min-width: 120px;
`;

export const DropdownMenuItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;
