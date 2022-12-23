import { GET_MOVIES_URL } from './constans'
export default {
   async getMovies() {
      try {
         const response = await fetch(GET_MOVIES_URL)
         const { data } = await response.json()
         return data
      } catch (error) {
         throw error
      }
   },
}

export class MoviesBuilder {
   constructor() {}

   build = (arr) => {
      this.movies = arr
      return this
   }

   filterTitleMovie = (titleMovieSearch) => {
      if (titleMovieSearch === '') {
         return this
      }
      this.movies = this.movies.filter((movie) =>
         movie.name_russian.toLowerCase().trim().includes(titleMovieSearch)
      )
      return this
   }

   filterRelease = (releaseYear) => {
      if (releaseYear === '') {
         return this
      }
      this.movies = this.movies = this.movies.filter(
         (movie) => movie.year == releaseYear
      )
      return this
   }
   filterGenre = (genre) => {
      if (genre === '') {
         return this
      }
      let sortedMoviesGenres = []
      this.movies.forEach((movie) => {
         return movie.genres.forEach((item) => {
            if (item.name_ru === genre) {
               sortedMoviesGenres.push(movie)
            }
         })
      })
      this.movies = sortedMoviesGenres
      return this
   }

   show = () => {
      console.log(this.movies)
      return this
   }
}
