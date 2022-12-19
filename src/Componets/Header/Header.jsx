import './Header.css'
import FilterBlock from '../filter/FilterBlock.jsx'
import { Route, Routes, Link } from 'react-router-dom'

function Header() {
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
         </div>
      </header>
   )
}

export default Header
