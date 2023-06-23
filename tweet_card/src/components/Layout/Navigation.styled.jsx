import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBlock = styled.nav`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  width: 85px;
  text-align: center;
  padding: 10px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: #00c2ad;
  border: 2px solid #00c2ad;
  background-color: white;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    color: #3e2d85;
    border: 2px solid #3e2d85;
  }
`;
