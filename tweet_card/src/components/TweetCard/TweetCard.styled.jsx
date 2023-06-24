import styled from "styled-components";

const media = {
  desktop: "@media screen and (min-width: 1200px)",
  tablet: "@media screen and (min-width: 768px)",
  mobile: "@media screen and (max-width: 767px)",
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 460px;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  ${media.mobile} {
    width: 100%;
    max-width: 380px;
  }
`;

export const LogoImage = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;

  ${media.mobile} {
    width: 60px;
    height: 18px;
    left: 10px;
    top: 10px;
  }
`;

export const SignsImage = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;

  ${media.mobile} {
    width: 220px;
    height: 120px;
    left: 20px;
    top: 16px;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  }

  ${media.mobile} {
    width:100%;
    max-width: 380px;
    top: 180px;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  width: 80px;
  height: 80px;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  overflow: hidden;
  z-index: 10;
  box-sizing: border-box;

  ${media.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 148px;
    transform: translateX(-50%);
    width: 70px;
    height: 70px;
    border-width: 8px;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Tweets = styled.p`
  position: absolute;
  margin: 0;
  top: 284px;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  ${media.mobile} {
    top: 240px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Followers = styled.p`
  position: absolute;
  top: 324px;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  ${media.mobile} {
    top: 280px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  border: none;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: ${(props) => (props.isFollowing ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${media.mobile} {
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 160px;
    height: 40px;
    top: 340px;
    font-size: 14px;
    line-height: 18px;
  }
`;
