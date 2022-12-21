const initialStateMovies = {
   movies: [],
   titleMovieSearch: '',
   selectedMovie: null,
   selectedReleaseYear: '',
   selectedGenre: '',
   isError: false,
   isLoading: false,
}

export const moviesReducer = (state = initialStateMovies, action) => {
   switch (action.type) {
      case 'LOADING_MOVIES':
         return {
            ...state,
            loading: true,
         }
      case 'LOADED_MOVIES':
         console.log(action.payload)
         return {
            ...state,
            loading:false,
            movies: action.payload,
         }
      case 'TYPE_MOVIE_IN_SEARCH':
         return {
            ...state,
            titleMovieSearch: action.payload,
         }
      case 'ERROR':
         return {
            ...state,
            isError: true,
            isLoading: true,
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
