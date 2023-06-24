import React, { useState, useEffect } from "react";
import { API } from "@/redux/users/operations";
import TweetCard from "@/components/TweetCard/TweetCard";

import {
  Container,
  LoadMoreButton,
  Wrapper,
  BtnWrapper,
  BackBtn,
  BackLink,
} from "./TweetsPage.styled";

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [visibleTweets, setVisibleTweets] = useState([]);
  const [loadedTweetsCount, setLoadedTweetsCount] = useState(3);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const data = await API.fetchTweets();
        setTweets(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTweets();
  }, []);

  useEffect(() => {
    setVisibleTweets(tweets.slice(0, loadedTweetsCount));
  }, [tweets, loadedTweetsCount]);

  const handleLoadMore = () => {
    setLoadedTweetsCount((prevCount) => prevCount + 3);
  };

  return (
    <Wrapper>
      <BackBtn>
        <BackLink to="/">⬅ Back</BackLink>
      </BackBtn>
      <Container>
        {visibleTweets.map((tweet) => (
          <TweetCard key={tweet.id} item={tweet} />
        ))}
      </Container>
      <BtnWrapper>
        {loadedTweetsCount < tweets.length ? (
          <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
        ) : (
          <LoadMoreButton disabled>Load more</LoadMoreButton>
        )}
      </BtnWrapper>
    </Wrapper>
  );
};

export default TweetsPage;
