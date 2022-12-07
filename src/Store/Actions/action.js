
export const setArrayMovies = (movieArray) =>{
    console.log(movieArray)
    return {
        type: 'LOADING_MOVIES',
        payload: movieArray,
    }
}

export const filterMoviesTitle = () => {
    return {
        type: 'FILTER_MOVIES_TITLE',
        payload:''
    }
}

export const setError = () =>{
    return{
        type:'LOADED_ERROR',
        payload:''
    }
}
