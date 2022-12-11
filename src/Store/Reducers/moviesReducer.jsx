const initialStateMovies = {
   movies: [],
   movieTitleOfSearch: '',
   clickIdMovie: null,
   error: false,
};

export const moviesReducer = (state = initialStateMovies, action) => {
   switch (action.type) {
      case 'LOADING_MOVIES':
         return {
            ...state,
            movies: action.payload,
         };
      case 'FILTER_MOVIES_TITLE':
         return {
            ...state,
            movieTitleOfSearch: action.payload,
         };
      case 'LOADING_ERROR':
         return {
            ...state,
            error: '',
         };
      case 'CLICK_MOVIE_ID':
         return {
            ...state,
            clickIdMovie: action.payload,
         };
      default:
         return state;
   }
};
