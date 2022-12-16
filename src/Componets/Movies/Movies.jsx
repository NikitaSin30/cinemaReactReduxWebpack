import './Movies.css'
import React from 'react'
import Movie from './Movie.jsx'
import { useSelector } from 'react-redux'

function Movies() {
   const movies = useSelector((state) => state.moviesReducer.movies)
   const inputValueHeader = useSelector(
      (state) => state.moviesReducer.movieTitleOfSearch
   )
   const genres = useSelector((state) => state.moviesReducer.genres)
   const releaseYear = useSelector((state) => state.moviesReducer.releaseYear)

   const filterGenre = (arr) => {
      let sortedMoviesGenres = []
      arr.forEach((movie) => {
         return movie.genres.forEach((item) => {
            if (item.name_ru === genres) {
               sortedMoviesGenres.push(movie)
            }
         })
      })
      return sortedMoviesGenres
   }

   const filterRelease = (arr) => {
      return arr.filter((movie) => movie.year > releaseYear)
   }

   const filterTitleMovie = (arr) => {
      return arr.filter((movie) =>
         movie.name_russian.toLowerCase().trim().includes(inputValueHeader)
      )
   }

   const mapper = () => {
      if (inputValueHeader) {
         if (genres) {
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
      if (genres) {
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
            )
         })}
      </div>
   )
}

export default Movies
