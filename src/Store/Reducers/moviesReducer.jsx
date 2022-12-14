const initialStateMovies = {
   movies: [],
   movieTitleOfSearch: '',
   selectedMovie: [],
   releaseYear: '',
   genres: '',
   error: false,
}

export const moviesReducer = (state = initialStateMovies, action) => {
   switch (action.type) {
      case 'LOADING_MOVIES':
         console.log(action.payload);
         return {
            ...state,
            movies: action.payload,
         }
      case 'MOVIE_TITLE_OF_SEARCH':
         return {
            ...state,
            movieTitleOfSearch: action.payload,
         }
      case 'LOADING_ERROR':
         return {
            ...state,
            error: '',
         }
      case 'SELECTED_MOVIE':
         return {
            ...state,
            selectedMovie: action.payload,
         }
      case 'GENRES':
         console.log(action.payload);
         return {
            ...state,
            genres: action.payload,
         }
      case 'RELEASE_YEAR':
         console.log(action.payload);

         return {
            ...state,
            releaseYear: action.payload,
         }
      default:
         return state
   }
}
