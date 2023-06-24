import styled from "styled-components";
import { Link } from "react-router-dom";

const media = {
  desktop: "@media screen and (min-width: 1200px)",
  tablet: "@media screen and (min-width: 768px)",
  mobile: "@media screen and (max-width: 767px)",
};

export const NavBlock = styled.nav`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    gap: 40px;
  }
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

  ${media.mobile} {
    width: 55px;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
  }
`;
