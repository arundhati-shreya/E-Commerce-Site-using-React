import React from 'react';

import Movie from './Movies';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <>
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
        title={movie.title}
        releaseDate={movie.releaseDate}
        openingText={movie.openingText}
        onDelete={() => props.onDeleteMovie(movie.id)}
        />
        ))}
    </ul>
    </>
  );
};

export default MovieList;