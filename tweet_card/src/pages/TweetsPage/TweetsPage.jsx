import React, { useState, useEffect } from "react";
import { API } from "../../redux/users/operations";
import TweetCard from "../../components/TweetCard/TweetCard";
import Dropdown from "../../components/Dropdown/Dropdawn";

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
  const [filter, setFilter] = useState("Show all");

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
    let filteredTweets = tweets;

    if (filter === "follow") {
      filteredTweets = tweets.filter((tweet) => !tweet.isFollowing);
    } else if (filter === "following") {
      filteredTweets = tweets.filter((tweet) => tweet.isFollowing === true);
    }

    setVisibleTweets(filteredTweets.slice(0, loadedTweetsCount));
  }, [tweets, filter, loadedTweetsCount]);

  const handleLoadMore = () => {
    setLoadedTweetsCount((prevCount) => prevCount + 3);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const options = [
    { value: "Show all", label: "Show All" },
    { value: "Follow", label: "Follow" },
    { value: "Following", label: "Following" },
  ];

  return (
    <Wrapper>
      <BackBtn>
        <BackLink to="/">⬅ Back</BackLink>
        <Dropdown
          value={filter}
          options={options}
          onChange={handleFilterChange}
        />
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
