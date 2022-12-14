
export const putDownMovies = (movieArray) =>{
    return {
        type: 'LOADING_MOVIES',
        payload: movieArray,
    }
}

export const putDownTitleofSearch = ( movieTitleOfSearch) => {
    return {
        type: 'MOVIE_TITLE_OF_SEARCH',
        payload: movieTitleOfSearch,
    }
}

export const putDownSelectedMovie = (clickMovie) => {
    return{
        type: 'SELECTED_MOVIE',
        payload: clickMovie,
    }
}

export const putDownStatusError = () =>{
    return{
        type:'LOADED_ERROR',
        payload:''
    }
}

export const putDownReleaseYear = (releaseYear) => {
    return{
        type:'RELEASE_YEAR',
        payload: releaseYear
    }
}

export const putDownGenres = (genres) => {
    return{
        type:'GENRES',
        payload: genres
    }
}
