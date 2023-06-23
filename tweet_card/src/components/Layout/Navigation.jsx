import { NavBlock, NavLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavBlock>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </NavBlock>
  );
};
