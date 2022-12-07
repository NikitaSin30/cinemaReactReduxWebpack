import './MoviesAll.css'
import Movie from './Movie.jsx'
import { useSelector } from 'react-redux';




function MoviesAll() {
   
   const stateMovie = useSelector(state => state.movie)
   console.log('3676765756', stateMovie)
   return (
      <div className='grid'>
            <Movie></Movie>
      </div>
   );
}

export default MoviesAll;
