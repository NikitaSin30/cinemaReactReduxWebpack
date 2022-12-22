import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './movie.css'
import {setStatusError} from '../../Store/actions/action.js'


function Movie({ nameRus, posterSmall, id,onClickGetMovie }) {
   const dispatch = useDispatch()
   function fn () {
   dispatch(setStatusError())
}
// src={posterSmall}
   return (
      <>
         <div className="card">
            <div className="car__item">
               <div className="card__content">
                  <div className="card__poster">
                     <img  onError={fn} alt="Постер" className="card__img" />
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
