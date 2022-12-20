import {GET_MOVIES_URL} from '../../api/constans'
export const request = () => {
   return (dispatch) => {
      fetch(GET_MOVIES_URL)
         .then((response) => response.json())
         .then((result) => {
            const { data } = result
            return data
         })
         .then((data) => dispatch(setMovies(data)))
         .catch(() => dispatch(setStatusError()))
   }
}

export const setMovies = (movieArray) => {
   return {
      type: 'LOADED_MOVIES',
      payload: movieArray,
   }
}

export const setTitleofSearch = (movieName) => {
   return {
      type: 'TYPE_MOVIE_IN_SEARCH',
      payload: movieName,
   }
}

export const setSelectedMovie = (clickMovie) => {
   return {
      type: 'SELECTED_MOVIE',
      payload: clickMovie,
   }
}

export const setStatusError = () => {
   return {
      type: 'ERROR',
   }
}

export const setReleaseYear = (selectedReleaseYear) => {
   return {
      type: 'RELEASE_YEAR',
      payload: selectedReleaseYear,
   }
}

export const setGenres = (selectedGenre) => {
   return {
      type: 'GENRES',
      payload: selectedGenre,
   }
}

// export const setStatusErro = (setGenres) =>{
//     return dispatch => {
//         dispatch(setGenres());
//         // type:'ERROR',
//     }
// }
