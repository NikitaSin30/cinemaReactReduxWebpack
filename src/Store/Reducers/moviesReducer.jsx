const initialStateMovies = {
   movies: [],
   movieName: '',
   selectedMovie: [],
   selectedReleaseYear: '',
   selectedGenre: '',
   errorS: false,
}

export const moviesReducer = (state = initialStateMovies, action) => {
   switch (action.type) {
      case 'LOADED_MOVIES':
         return {
            ...state,
            movies: action.payload,
         }
      case 'TYPE_MOVIE_IN_SEARCH':
         return {
            ...state,
            movieName: action.payload,
         }
      case 'ERROR':
         return {
            ...state,
            error: true,
         }
      case 'SELECTED_MOVIE':
         return {
            ...state,
            selectedMovie: action.payload,
         }
      case 'GENRES':
         return {
            ...state,
            selectedGenre: action.payload,
         }
      case 'RELEASE_YEAR':
         return {
            ...state,
            selectedReleaseYear: action.payload,
         }
      default:
         return state
   }
}
