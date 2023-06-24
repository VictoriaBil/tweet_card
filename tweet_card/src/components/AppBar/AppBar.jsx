import { Navigation } from "@/Layout/Navigation";
import { HeaderBlock, Header } from "./AppBar.styled";

const AppBar = () => {
  return (
    <HeaderBlock>
      <Header>
        <Navigation />
      </Header>
    </HeaderBlock>
  );
};

export default AppBar;
