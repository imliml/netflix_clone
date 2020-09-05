import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import styled from "styled-components";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({
  today,
  popular,
  topRated,
  thisWeek,
  loading,
  error,
}) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {today && today.length > 0 && (
        <Section title="Today">
          {today.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {thisWeek && thisWeek.length > 0 && (
        <Section title="This Week">
          {thisWeek.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date}
              isMovie={false}
            />
          ))}
        </Section>
      )}
    </Container>
  );
};

TVPresenter.propTypes = {
  today: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  thisWeek: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
