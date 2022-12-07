/* eslint-disable default-case */
import * as action from '../Actions/action.js';

const initialStateMovies = {
movie: '',
error: false,
};



export const moviesReducer = (state = initialStateMovies, action) => {
   switch (action.type) {
      case 'LOADING_MOVIES':
         console.log(action.payload,3333)
         console.log(state,3333)
         return {
            ...state,
            movie: action.payload,
         };
      case 'FILTER_MOVIES_TITLE':
         return {
            ...state,
            ...action.payload,
         };
         case 'LOADING_ERROR':
            return {
               ...state,
               error: ''
            }
      default:
         return state;
   }
};
