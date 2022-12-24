export class MoviesBuilder {
   constructor(movies) {
      this.movies = movies
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
