import React, { useState } from "react";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    searchKeyword: null,
    movieError: null,
    showsError: null,
    loading: false,
  });

  const onChange = (text) => setKeyword(text);

  const updateTerm = (text) => {
    const {
      target: { value },
    } = text;
    this.setKeyword({
      keyword: value,
    });
  };

  const onSubmit = async () => {
    setResults({ loading: true });
    if (keyword === "") {
      return;
    }
    // api 태움
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      movieError,
      showsError,
      loading: false,
    });
  };

  return (
    <SearchPresenter
      {...results}
      onChange={updateTerm}
      onSubmit={onSubmit}
      keyword={keyword}
    />
  );
};

export default SearchContainer;
