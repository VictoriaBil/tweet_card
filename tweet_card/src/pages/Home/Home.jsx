import HomeImage from "../../assets/images/Home.jpg";
import { Container, Img } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <Img src={HomeImage} alt="phone" />
    </Container>
  );
};

export default Home;
