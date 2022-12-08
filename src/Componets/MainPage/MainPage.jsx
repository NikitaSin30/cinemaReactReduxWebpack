
import MoviesAll from '../Movies/MoviesAll.jsx';
import { useDispatch, useSelector } from 'react-redux';

function MainPage({moviesList}) {

   return (
      <div className='_container'>
         <MoviesAll moviesList={moviesList}/>
      </div>
   );
}

export default MainPage;
