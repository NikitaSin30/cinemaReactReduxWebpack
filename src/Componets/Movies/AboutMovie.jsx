import './AboutMovie.css'

function AboutMovie() {
   const selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'))
   return (
      <>
         {selectedMovie.map((movie) => {
            return (
               <div className="_container">
                  <div className="page__about-movie about-movie">
                     <div className="about-movie__bigPoster">
                        <img src={movie.big_poster} alt="Постер" />
                     </div>
                     <div className="about-movie__info">
                        <div className="about-movie-info__title">
                           <h2>{movie.name_russian}</h2>
                        </div>
                        <div className="about-movie-info__actors">
                           <h2>Актёры:</h2>
                           {movie.persons.map((person) => {
                              return <h3>{person.name_russian},</h3>
                           })}
                        </div>
                        <div className="about-movie-info__genres">
                           <h2>Жанр:</h2>
                           {movie.genres.map((genre) => {
                              return <h3>{genre.name_ru},</h3>
                           })}
                        </div>
                        <p className="about-movie-info__description">
                           {movie.description}
                        </p>
                        <div className="about-movie-info__trailer">
                           <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/7-W7gzBkNz0"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </>
   )
}

export default AboutMovie
