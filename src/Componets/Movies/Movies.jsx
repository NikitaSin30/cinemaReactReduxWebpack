import './movies.css'
import React, { useState } from 'react'
import Movie from './Movie.jsx'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'

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

   const filterGenre = (arr) => {
      let sortedMoviesGenres = []
      arr.forEach((movie) => {
         return movie.genres.forEach((item) => {
            if (item.name_ru === genre) {
               sortedMoviesGenres.push(movie)
            }
         })
      })
      return sortedMoviesGenres
   }

   const filterRelease = (arr) => {
      return arr.filter((movie) => movie.year == releaseYear)
   }

   const filterTitleMovie = (arr) => {
      return arr.filter((movie) =>
         movie.name_russian.toLowerCase().trim().includes(titleMovieSearch)
      )
   }

   const mapper = () => {
      if (titleMovieSearch) {
         if (genre) {
            if (releaseYear) {
               return filterGenre(filterRelease(filterTitleMovie(movies)))
            }
            return filterGenre(filterTitleMovie(movies))
         }
         if (releaseYear) {
            return filterRelease(filterTitleMovie(movies))
         }
         return filterTitleMovie(movies)
      }
      if (genre) {
         if (releaseYear) {
            return filterGenre(filterRelease(movies))
         }
         return filterGenre(movies)
      }
      if (releaseYear) {
         return filterRelease(movies)
      }
      return movies
   }

   const customMovies = mapper()

   function onClickGetMovie(id) {
      const selectedMovie = movies.filter((movie) => movie.id === id)
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie))
   }

   return (
      <div className="movies">
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
         {end < 50 ? (
            <Button onClick={addMoviesOnPage} variant="contained">
               Показать ещё
            </Button>
         ) : null}
      </div>
   )
}

export default Movies
