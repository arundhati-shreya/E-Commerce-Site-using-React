import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Form from './components/Form';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const retryFetch = useCallback(() => {
    const retryInterval = setInterval(() => {
      setRetryCount((prevRetryCount) => prevRetryCount + 1);
    }, 5000);

    return () => {
      clearInterval(retryInterval);
    };
  }, []);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong...Retrying');
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      retryFetch();
    }
    setIsLoading(false);
  }, [retryFetch]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler, retryCount]);

  const cancelRetryHandler = useCallback(() => {
    setRetryCount(0);
  }, []);


  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = (
      <div>
        <p>{error}</p>
        <button onClick={cancelRetryHandler}>Cancel Retry</button>
      </div>
    );
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section> <Form/></section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
