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

   console.log(movies)
   // const filterCharacteristic = useMemo (() =>{
   //    if(genres === '') return movies
   //    return movies.genres.filter((genre) => {
   //       genre.name_ru == genres
   //    })
   // })
   // const f = useMemo(() => {
   //    movies.map(movie => {
   //       movie.genres.map(i =>  console.log(i) )
   //    })
   //    })

   // const f = movies.map((movie) => {
   //    return movie.genres.filter((genre) => {
   //       if (genre.name_ru === 'драма') {
   //          return { ...movie }
   //       }
   //    })
   // })

   
   const f = movies.forEach((movie) => {
    return movie.genres.forEach(i => {
      if(i.name_ru === 'драма')  {
         console.log(movie)
         return movie
      }
   })
   })

   console.log(45353535, f)
   console.log(movies)

   const filterTitleMovie = useMemo(() => {
      return movies.filter((movie) =>
         movie.name_russian.toLowerCase().trim().includes(inputValueHeader)
      )
   })

   const customMovies = inputValueHeader === '' ? movies : filterTitleMovie

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
