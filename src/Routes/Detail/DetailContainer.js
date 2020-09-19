import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = ({ pathname }) => {
  let { id } = useParams();
  let location = useLocation();

  const [item, setItem] = useState({
    result: {},
    resultError: null,
    similar: {},
    similarError: null,
    loading: true,
  });

  const getData = async () => {
    const [result, resultError] = location.pathname.includes("/movie/")
      ? await movieApi.movie(id)
      : await tvApi.show(id);
    const [similar, similarError] = location.pathname.includes("/movie/")
      ? await movieApi.similar(id)
      : await tvApi.similar(id);
    setItem({
      result,
      resultError,
      similar,
      similarError,
      loading: false,
    });
    console.log("+++++++++++++++++++++++", similar);
  };

  useEffect(() => {
    getData();
  });

  return (
    <DetailPresenter
      result={item.result}
      loading={item.loading}
      error={item.resultError}
      similar={item.similar}
    />
  );
};

export default DetailContainer;
