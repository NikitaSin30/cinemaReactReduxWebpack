const initialStateMovies = {
   movies: [],
   titleMovieSearch: '',
   selectedMovie: null,
   selectedReleaseYear: '',
   selectedGenre: '',
   isError: false,
   isLoading: false,
   currentPage: 1,
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
            loading: false,
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
      // case 'NEXT_PAGE':
      //    return {
      //       ...state,
      //        currentPage: currentPage + 1 ,
      //    }
      default:
         return state
   }
}
