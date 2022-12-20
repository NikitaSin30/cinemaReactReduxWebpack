const initialStateMovies = {
   movies: [],
   movieName: '',
   selectedMovie: [],
   selectedReleaseYear: '',
   selectedGenre: '',
   error: false,
   loading: false,
}

export const moviesReducer = (state = initialStateMovies, action) => {
   switch (action.type) {
      case 'LOADING_MOVIES':
         return {
            ...state,
            loading: true,
         }
      case 'LOADED_MOVIES':
         return {
            ...state,
            loading:false,
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
