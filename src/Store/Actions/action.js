
export const setArrayMovies = (movieArray) =>{
    return {
        type: 'LOADING_MOVIES',
        payload: movieArray,
    }
}

export const getValuyInput = (valueInput) => {
    return {
        type: 'FILTER_MOVIES_TITLE',
        payload:valueInput,
    }
}

export const setError = () =>{
    return{
        type:'LOADED_ERROR',
        payload:''
    }
}
