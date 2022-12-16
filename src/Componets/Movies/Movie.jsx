import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import './Movie.css'

function Movie({ nameRus, posterSmall, id }) {
   const movies = useSelector((state) => state.moviesReducer.movies)

   function onClickGetMovie(id) {
      const selectedMovie = movies.filter((movie) => movie.id === id)
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie))
   }

   return (
      <>
         <div className="card">
            <div className="car__item">
               <div className="card__content">
                  <div className="card__poster">
                     <img src={posterSmall} alt="" className="card__img" />
                  </div>
                  <div className="card__text">
                     <h2 className="card__titleMovie">{nameRus}</h2>
                     <Link
                        className="card__link"
                        to={`aboutMovie`}
                        onClick={() => onClickGetMovie(id)}>
                        Подробнее
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Movie
