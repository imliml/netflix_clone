import React, { useEffect, useState } from "react";
import { movieApi } from "../api";

const Home = () => {
  // 상태값 선언
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });

  // 데이터 불러오는 함수
  const getData = async () => {
    const [results, error] = await movieApi.nowPlaying();
    setMovies({
      results,
      error,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>{movies.results.length}</h1>
    </div>
  );
};

export default Home;
