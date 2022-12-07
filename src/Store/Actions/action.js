
export const getArrayMovies = (movieArray) =>{
    console.log(movieArray)
    return {
        type: 'LOADING_MOVIES',
        payload: movieArray,
    }
}

export const filterMoviesTitle = () => {
    return {
        type: 'LOADING_MOVIES',
        payload:''
    }
}

export const setError = () =>{
    return{
        type:'LOADED_ERROR',
        payload:''
    }
}
