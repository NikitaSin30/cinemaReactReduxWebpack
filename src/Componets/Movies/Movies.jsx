import './Movies.css'
import React, { useMemo } from 'react'
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

   console.log(filterGenre(movies))

   const filterRelease = (arr) => {
      return arr.filter((movie) => movie.year === releaseYear)
   }

   const filterTitleMovie = (arr) => {
      return arr.filter((movie) =>
         movie.name_russian.toLowerCase().trim().includes(inputValueHeader)
      )
   }

   const custom = () => {
      if (genres === '' && releaseYear === '' && inputValueHeader === '')
         return movies
      if (genres !== '' && releaseYear === '' && inputValueHeader === '')
         return filterGenre(movies)
      if (genres === '' && releaseYear !== '' && inputValueHeader === '')
         return filterRelease(movies)
      if (genres === '' && releaseYear === '' && inputValueHeader !== '')
         return filterTitleMovie(movies)
      if (genres !== '' && releaseYear !== '' && inputValueHeader === '')
         return filterGenre(filterRelease(movies))
      if (genres !== '' && releaseYear === '' && inputValueHeader !== '')
         return filterGenre(filterTitleMovie(movies))
      if (genres === '' && releaseYear !== '' && inputValueHeader !== '')
         return filterRelease(filterTitleMovie(movies))
      if (genres !== '' && releaseYear !== '' && inputValueHeader !== '')
         return filterGenre(filterRelease(filterTitleMovie(movies)))
   }

   const customMovies = custom()

   // const customMovies = inputValueHeader === '' ? movies : filterTitleMovie

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
