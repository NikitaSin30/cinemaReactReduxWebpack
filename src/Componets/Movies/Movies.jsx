import './movies.css'
import React, { useState } from 'react'
import Movie from './Movie.jsx'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { MoviesBuilder } from '../../mapper/moviesBuilder.js'
import NoFilmsComponent from '../noFilmsComponent/noFilmsComponent.jsx'

function Movies() {
   const movies = useSelector((state) => state.moviesReducer.movies)
   const titleMovieSearch = useSelector(
      (state) => state.moviesReducer.titleMovieSearch
   )
   const genre = useSelector((state) => state.moviesReducer.selectedGenre)
   const releaseYear = useSelector(
      (state) => state.moviesReducer.selectedReleaseYear
   )
   const quantityShowMovies = 9
   let [currentPage, setCurrentPage] = useState(1)
   let [end, setEnd] = useState(quantityShowMovies)

   function addMoviesOnPage() {
      setCurrentPage((currentPage += 1))
      setEnd(quantityShowMovies * currentPage)
   }

   const newMovies = new MoviesBuilder(movies)
      .filterTitleMovie(titleMovieSearch)
      .filterRelease(releaseYear)
      .filterGenre(genre)

   const customMovies = newMovies.movies

   function onClickGetMovie(id) {
      const selectedMovie = movies.filter((movie) => movie.id === id)
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie))
   }

   return (
      <div className="movies">
         {customMovies.length === 0 ? (
            <NoFilmsComponent />
         ) : (
            <div className="grid">
               {customMovies.slice(0, end).map((movie) => {
                  return (
                     <Movie
                        onClickGetMovie={onClickGetMovie}
                        id={movie.id}
                        key={movie.id}
                        nameRus={movie.name_russian}
                        posterSmall={movie.small_poster}
                     />
                  )
               })}
            </div>
         )}
         {end < 50 && customMovies.length !== 0 ? (
            <Button onClick={addMoviesOnPage} variant="contained">
               Показать ещё
            </Button>
         ) : null}
      </div>
   )
}

export default Movies
