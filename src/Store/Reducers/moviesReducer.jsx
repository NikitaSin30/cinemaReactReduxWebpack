const initialStateMovies = {
   movies: [],
   movieTitleOfSearch: '',
   selectedMovie: [],
   error: false,
};

export const moviesReducer = (state = initialStateMovies, action) => {
   switch (action.type) {
      case 'LOADING_MOVIES':
         return {
            ...state,
            movies: action.payload,
         };
      case 'MOVIE_TITLE_OF_SEARCH':
         return {
            ...state,
            movieTitleOfSearch: action.payload,
         };
      case 'LOADING_ERROR':
         return {
            ...state,
            error: '',
         };
      case 'SELECTED_MOVIE':
         return {
            ...state,
            selectedMovie: action.payload,
         };
      default:
         return state;
   }
};
