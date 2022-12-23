import loadingGif from './loadingGif.gif'
import './loadingComponents.css'
function LoadingComponent() {
   return (
      <div className="page__loading loading">
         <div className="loading-container _container">
            <figure className="loading__image">
               <img src={loadingGif} alt="Изображение ошибки" />
            </figure>
         </div>
      </div>
   )
}

export default LoadingComponent
