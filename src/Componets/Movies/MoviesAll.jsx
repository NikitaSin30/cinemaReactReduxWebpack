import './MoviesAll.css';
import Movie from './Movie.jsx';
import { useSelector } from 'react-redux';

function MoviesAll({ moviesList }) {
   // const inputValueTitleMovie = useSelector(state=> state.moviesReducer.valueInput)

   // console.log(435354353453,inputValueTitleMovie);

   return (
      <div className="grid">
         {moviesList.map((movie) => {
            console.log(movie);
            return (
               <Movie
                  id={movie.id}
                  key={movie.id}
                  nameRus={movie.nameRus}
                  posterSmall={movie.posterSmall}
               />
            );
         })}
      </div>
   );
}

export default MoviesAll;
