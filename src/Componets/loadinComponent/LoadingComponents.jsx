function LoadingComponent() {
   return (
      <div className="page__error error">
         <div className="_container">
            <p className="error__text">
               Загрузка <br /> Подождите
            </p>

            {/* <figure className="error__image">
             <img src={myGif} alt="Изображение ошибки" />
          </figure> */}
         </div>
      </div>
   )
}

export default LoadingComponent
