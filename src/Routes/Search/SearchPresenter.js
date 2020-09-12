import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movies,
  shows,
  keyword,
  onChange,
  onSubmit,
  loading,
}) => {
  return (
    <Container>
      <Helmet>
        <title>Search | Netflix Clone</title>
      </Helmet>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Search Movies or TV shows..."
          value={keyword}
          onChange={onChange}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movies && movies.length > 0 && (
            <Section title="Movie Results">
              {movies.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {shows && shows.length > 0 && (
            <Section title="Shows Results">
              {shows.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={show.first_air_date}
                />
              ))}
            </Section>
          )}
        </>
      )}
    </Container>
  );
};

export default SearchPresenter;
