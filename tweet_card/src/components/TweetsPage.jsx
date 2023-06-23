import React, { useState, useEffect } from "react";
import { API } from "../redux/users/operations";
import TweetCard from "../pages/Card";
import { Container } from "./TweetsPage.styled";

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const data = await API.fetchTweets(); // Вызовите функцию fetchTweets из вашего модуля API
        setTweets(data); // Сохраните полученные данные в состоянии
      } catch (error) {
        console.error(error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <Container>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} item={tweet} /> // Передайте объект tweet в компонент TweetCard
      ))}
    </Container>
  );
};

export default TweetsPage;
