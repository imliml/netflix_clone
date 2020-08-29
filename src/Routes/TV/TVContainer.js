import React, { useEffect, useState } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

const TVContainer = () => {
  // 상태값 선언
  const [tv, setTv] = useState({
    today: [],
    popular: [],
    topRated: [],
    thisWeek: [],
    todayError: null,
    popularError: null,
    topRatedError: null,
    thisWeekError: null,
    loading: true,
  });

  // 데이터 불러오는 함수
  const getData = async () => {
    const [popular, popularError] = await tvApi.popular();
    const [today, todayError] = await tvApi.today();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();

    setTv({
      loading: false,
      popular,
      today,
      topRated,
      thisWeek,
      popularError,
      todayError,
      topRatedError,
      thisWeekError,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return <TVPresenter {...tv} />;
};

export default TVContainer;
