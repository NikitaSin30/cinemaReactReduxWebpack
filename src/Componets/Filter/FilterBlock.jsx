import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import {
   putDownTitleofSearch,
   putDownReleaseYear,
   putDownGenres,
} from '../../Store/Actions/action.js'
import './Filter.css'

function FilterBlock() {
   const dispatch = useDispatch()

   const getValueInput = (e) => {
      const inputValueHeader = e.target.value.toLowerCase().trim()
      dispatch(putDownTitleofSearch(inputValueHeader))
   }

   const getGenre = (e) => {
      dispatch(putDownGenres(e.target.value.toLowerCase()))
   }

   const getReleaseYeaer = (e) => {
      dispatch(putDownReleaseYear(e.target.value.toLowerCase()))
   }

   return (
      <div className="filter">
         <form className="filter-block">
            <select className="filter-block__genre" onClick={getGenre}>
               <option value="">Жанр</option>
               <option value="комедия">Комедия</option>
               <option value="криминал">Криминал</option>
               <option value="мелодрама">Мелодрама</option>
               <option value="драма">Драма</option>
               <option value="комедия">Комендия</option>
               <option value="боевик">Боевик</option>
            </select>
            <select
               action=""
               className="filter-block__releaseYear"
               onClick={getReleaseYeaer}>
               <option value="">Год</option>
               <option value="2000">2000 и свежее</option>
               <option value="1990">1990 и свежее</option>
               <option value="1980">1980 и свежее</option>
               <option value="1970">1970 и свежее</option>
               <option value="1960">1960 и свежее</option>
               <option value="1940">1940 и свежее</option>
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
