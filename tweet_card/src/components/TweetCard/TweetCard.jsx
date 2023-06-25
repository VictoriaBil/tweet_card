// import React, { useState, useEffect } from "react";
// import {
//   Wrapper,
//   LogoImage,
//   SignsImage,
//   Rectangle,
//   AvatarWrapper,
//   AvatarImage,
//   Tweets,
//   Followers,
//   Button,
// } from "./TweetCard.styled";
// import Logo from "../../assets/images/Logo.png";
// import Logo2x from "@/assets/images/Logo@2x.png";
// import Signs from "@/assets/images/signs.png";
// import Signs2x from "@/assets/images/signs@2x.png";

// const TweetCard = ({ item }) => {
//   const [tweets, setTweets] = useState(
//     localStorage.getItem(`tweets_${item.id}`) || item.tweets
//   );
//   const [followers, setFollowers] = useState(
//     localStorage.getItem(`followers_${item.id}`) || item.followers
//   );
//   const [avatar, setAvatar] = useState(item.avatar);
//   const [isFollowing, setIsFollowing] = useState(
//     localStorage.getItem(`isFollowing_${item.id}`) === "true" ? true : false
//   );
//   const [isInitialRender, setIsInitialRender] = useState(true);

//   useEffect(() => {
//     setIsInitialRender(false);
//   }, []);

//   useEffect(() => {
//     if (!isInitialRender) {
//       localStorage.setItem(`tweets_${item.id}`, tweets);
//       localStorage.setItem(`followers_${item.id}`, followers);
//       localStorage.setItem(`isFollowing_${item.id}`, isFollowing);
//     }
//   }, [tweets, followers, isFollowing]);

//   const handleFollowClick = () => {
//     if (!isFollowing) {
//       setFollowers((prevFollowers) => prevFollowers + 1);
//     } else {
//       setFollowers((prevFollowers) => prevFollowers - 1);
//     }
//     setIsFollowing(!isFollowing);
//   };

//   const formatNumber = (number) => {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };

//   return (
//     <Wrapper>
//       <LogoImage srcSet={`${Logo} 1x, ${Logo2x} 2x`} src={Logo2x} alt="logo" />
//       <SignsImage
//         srcSet={`${Signs} 1x, ${Signs2x} 2x`}
//         src={Signs2x}
//         alt="signs"
//       />
//       <Rectangle></Rectangle>
//       <AvatarWrapper>
//         <AvatarImage src={avatar} alt="avatar" />
//       </AvatarWrapper>
//       <Tweets>{tweets} tweets</Tweets>
//       <Followers>{formatNumber(followers)} followers</Followers>
//       <Button isFollowing={isFollowing} onClick={handleFollowClick}>
//         {isFollowing ? "Following" : "Follow"}
//       </Button>
//     </Wrapper>
//   );
// };

// export default TweetCard;

import React, { useState, useEffect } from "react";
import {
  Wrapper,
  LogoImage,
  SignsImage,
  Rectangle,
  AvatarWrapper,
  AvatarImage,
  Tweets,
  Followers,
  Button,
} from "./TweetCard.styled";
import Logo from "../../assets/images/Logo.png";
import Logo2x from "../../assets/images/Logo@2x.png";
import Signs from "../../assets/images/signs.png";
import Signs2x from "../../assets/images/signs@2x.png";

const TweetCard = ({ item }) => {
  const [tweets, setTweets] = useState(item.tweets);
  const [followers, setFollowers] = useState(item.followers);
  const [avatar, setAvatar] = useState(item.avatar);

  const handleFollowClick = () => {
    setFollowers((prevFollowers) =>
      item.isFollowing ? prevFollowers - 1 : prevFollowers + 1
    );
    item.isFollowing = !item.isFollowing;
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Wrapper>
      <LogoImage srcSet={`${Logo} 1x, ${Logo2x} 2x`} src={Logo2x} alt="logo" />
      <SignsImage
        srcSet={`${Signs} 1x, ${Signs2x} 2x`}
        src={Signs2x}
        alt="signs"
      />
      <Rectangle></Rectangle>
      <AvatarWrapper>
        <AvatarImage src={avatar} alt="avatar" />
      </AvatarWrapper>
      <Tweets>{tweets} tweets</Tweets>
      <Followers>{formatNumber(followers)} followers</Followers>
      <Button isFollowing={item.isFollowing} onClick={handleFollowClick}>
        {item.isFollowing ? "Following" : "Follow"}
      </Button>
    </Wrapper>
  );
};

export default TweetCard;
