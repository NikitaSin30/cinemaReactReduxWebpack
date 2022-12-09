import './MoviesAll.css';
import React, { useMemo } from 'react';
import Movie from './Movie.jsx';
import { useSelector } from 'react-redux';

function MoviesAll({ moviesList }) {
   const inputValueTitleMovie = useSelector(
      (state) => state.moviesReducer.valueInput
   );
   console.log(inputValueTitleMovie);

   const filterTitleMovie = useMemo(() => {
      return moviesList.filter((movie) =>
         movie.nameRus.toLowerCase().trim().includes(inputValueTitleMovie)
      );
   });

   const customMovies =
      inputValueTitleMovie === '' ? moviesList : filterTitleMovie;

   return (
      <div className="grid">
         {customMovies.map((movie) => {
            return (
               <Movie
                  id={movie.id}
                  key={movie.id}
                  nameRus={movie.nameRus}
                  posterSmall={movie.posterSmall}
               />
            );
         })}
      </div>
   );
}

export default MoviesAll;
