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
    loading: true,
  });

  const getData = async () => {
    const [result, resultError] = location.pathname.includes("/movie/")
      ? await movieApi.movie(id)
      : await tvApi.show(id);
    setItem({
      result,
      resultError,
      loading: false,
    });
    console.log("idididid", location.pathname);
    console.log("isMovie", result);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <DetailPresenter
      result={item.result}
      loading={item.loading}
      error={item.resultError}
    />
  );
};

export default DetailContainer;
