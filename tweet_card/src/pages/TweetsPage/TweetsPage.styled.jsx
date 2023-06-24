import styled from "styled-components";
import { Link } from "react-router-dom";

const media = {
  desktop: "@media screen and (min-width: 1200px)",
  tablet: "@media screen and (min-width: 768px)",
  mobile: "@media screen and (max-width: 767px)",
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const BackBtn = styled.div`
  align-self: flex-start;
  margin-left: 40px;

  ${media.mobile} {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const BackLink = styled(Link)`
  color: black;
  font-weight: 600;
  font-size: 20px;

  &:hover,
  &:focus {
    color: #3e2d85;
  }
`;

export const LoadMoreButton = styled.button`
  width: 185px;
  text-align: center;
  padding: 10px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? "#9e9e9e" : "#00c2ad")};
  border: 2px solid ${(props) => (props.disabled ? "#9e9e9e" : "#00c2ad")};
  background-color: white;
  margin-bottom: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover,
  &:focus {
    color: ${(props) => (props.disabled ? "#9e9e9e" : "#3e2d85")};
    border: 2px solid ${(props) => (props.disabled ? "#9e9e9e" : "#3e2d85")};

    &:focus {
      outline: none;
    }
  }
`;
