import './Movies.css';
import React, { useMemo } from 'react';
import Movie from './Movie.jsx';
import { useSelector } from 'react-redux';

function Movies() {
   const movies = useSelector((state) => state.moviesReducer.movies);
   const inputValueHeader = useSelector(
      (state) => state.moviesReducer.movieTitleOfSearch
   );
   const filterTitleMovie = useMemo(() => {
      return movies.filter((movie) =>
         movie.name_russian.toLowerCase().trim().includes(inputValueHeader)
      );
   });

   const customMovies = inputValueHeader === '' ? movies : filterTitleMovie;

   return (
      <div className="grid">
         {customMovies.map((movie) => {
            return (
               <Movie
                  id={movie.id}
                  key={movie.id}
                  nameRus={movie.name_russian}
                  posterSmall={movie.small_poster}
               />
            );
         })}
      </div>
   );
}

export default Movies;