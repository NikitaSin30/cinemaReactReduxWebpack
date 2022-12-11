
export const setArrayMovies = (movieArray) =>{
    return {
        type: 'LOADING_MOVIES',
        payload: movieArray,
    }
}

export const setValueInputState = ( movieTitleOfSearch) => {
    return {
        type: 'FILTER_MOVIES_TITLE',
        payload: movieTitleOfSearch,
    }
}

export const setClickIdMovie = (id) => {
    return{
        type: 'CLICK_MOVIE_ID',
        payload: id,
    }
}

export const setError = () =>{
    return{
        type:'LOADED_ERROR',
        payload:''
    }
}
