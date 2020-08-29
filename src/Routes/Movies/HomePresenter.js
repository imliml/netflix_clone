import React from "react";
import PropTypes from "prop-types";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => {
  return (
    <div>
      <h1>{nowPlaying.length}</h1>
    </div>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
