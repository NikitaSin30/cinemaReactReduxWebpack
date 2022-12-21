import errorGif from './errorGif.gif'
import './errorComponets.css'

function ErrorComponets() {
   return (
      <div className="page__error error">
         <div className="error-container _container">
            <p className="error__text">
               Что-то пошло не так. попробуйте позже. <br /> Мы уже ищем ошибку.
            </p>
            <figure className="error__image">
               <img src={errorGif} alt="Изображение ошибки" />
            </figure>
         </div>
      </div>
   )
}

export default ErrorComponets
