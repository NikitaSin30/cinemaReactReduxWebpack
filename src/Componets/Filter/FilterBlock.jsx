import { capitalize, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
   setTitleofSearch,
   setReleaseYear,
   setGenres,
} from '../../Store/actions/action.js'
import { mountSelectGenres, mountSelectReleaseYear } from './mountMethod.js'
import './filter.css'

function FilterBlock() {
   const dispatch = useDispatch()
   const movies = useSelector((state) => state.moviesReducer.movies)
   const GENRES = mountSelectGenres(movies)
   const RELEASE_YEAR = mountSelectReleaseYear(movies)

   const getValueInput = (e) => {
      const inputValueHeader = e.target.value.toLowerCase().trim()
      dispatch(setTitleofSearch(inputValueHeader))
   }

   const getGenre = (e) => {
      dispatch(setGenres(e.target.value.toLowerCase()))
   }

   const getReleaseYeaer = (e) => {
      dispatch(setReleaseYear(e.target.value.toLowerCase()))
   }

   return (
      <div className="filter">
         <form className="filter-block">
            <select className="filter-block__genre" onClick={getGenre}>
               <option value="">Жанр</option>
               {GENRES.map((genre) => {
                  return (
                     <option key={genre} value={genre}>
                        {capitalize(genre)}
                     </option>
                  )
               })}
            </select>
            <select
               action=""
               className="filter-block__releaseYear"
               onClick={getReleaseYeaer}>
               <option value="">Год</option>
               {RELEASE_YEAR.map((year) => {
                  return (
                     <option key={year} value={year}>
                        {year}
                     </option>
                  )
               })}
            </select>
         </form>
         <TextField
            id="outlined-basic"
            label="Название фильма"
            variant="outlined"
            onChange={getValueInput}
         />
      </div>
   )
}

export default FilterBlock
