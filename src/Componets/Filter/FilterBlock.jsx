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
               <option value="1948">1948</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
               <option value="2018">2018</option>
               <option value="2017">2017</option>
               <option value="2016">Старше</option>
            </select>
            {/* <button>Click</button> */}
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
