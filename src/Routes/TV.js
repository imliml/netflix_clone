import React, { useEffect, useState } from "react";
import { tvApi } from "../api";

const TV = () => {
  // 상태값 선언
  const [tv, setTv] = useState({
    results: [],
    error: null,
  });

  // 데이터 불러오는 함수
  const getData = async () => {
    const [results, error] = await tvApi.popular();
    setTv({
      results,
      error,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>{tv.results.length}</h1>
    </div>
  );
};

export default TV;
