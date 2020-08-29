import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "../../api";

const HomeContainer = () => {
  // 상태값 선언
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
    loading: true,
  });

  // 데이터 불러오는 함수
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
    console.log(nowPlaying.length);
  };

  useEffect(() => {
    getData();
  }, []);
  return <HomePresenter {...movies} />;
};

export default HomeContainer;
