import api from '../../api'

export const mountMovies = () => {
   return async (dispatch) => {
      dispatch(setLoading())
      try {
         const movies = await api.getMovies()
         dispatch(setMovies(movies))
      } catch (error) {
         dispatch(setStatusError())
      }
   }
}

export const setLoading = () => {
   return {
      type: 'LOADING_MOVIES',
   }
}

export const setMovies = (movies) => {
   return {
      type: 'LOADED_MOVIES',
      payload: movies,
   }
}

export const setTitleofSearch = (titleMovieSearch) => {
   return {
      type: 'TYPE_MOVIE_IN_SEARCH',
      payload: titleMovieSearch,
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
