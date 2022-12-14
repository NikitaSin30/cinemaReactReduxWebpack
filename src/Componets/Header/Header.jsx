import { Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { putDownTitleofSearch } from '../../Store/Actions/action.js'
import './Header.css'
import FilterBlock from '../Filter/FilterBlock.jsx'
import { Route, Routes, Link } from 'react-router-dom'

function Header() {
   const dispatch = useDispatch()
   const getValueInput = (e) => {
      const inputValueHeader = e.target.value.toLowerCase().trim()
      dispatch(putDownTitleofSearch(inputValueHeader))
   }
   return (
      <header className="header">
         <div className="header__container _container">
            <div className="header__linkBlock">
               <Routes>
                  <Route
                     path="aboutMovie"
                     element={
                        <Link className="header__link" to="/">
                           Главная
                        </Link>
                     }
                  />
               </Routes>
            </div>
            <Routes>
               <Route path="/" element={<FilterBlock />} />
            </Routes>

            {/* <form action="" className="header__form">
               <TextField
                  className="form-header__search"
                  id="outlined-basic"
                  label="Название фильма"
                  variant="outlined"
                  onChange={getValueInput}
               />
            </form> */}
         </div>
      </header>
   )
}

export default Header
