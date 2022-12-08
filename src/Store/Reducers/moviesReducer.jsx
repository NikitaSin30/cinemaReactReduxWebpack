/* eslint-disable default-case */
import * as action from '../Actions/action.js';

const initialStateMovies = {
   movies: [],
   valueInput: '',
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
            valueInput: action.payload,
         };
      case 'LOADING_ERROR':
         return {
            ...state,
            error: '',
         };
      default:
         return state;
   }
};
