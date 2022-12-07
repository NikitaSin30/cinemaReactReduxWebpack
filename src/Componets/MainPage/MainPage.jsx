
import MoviesAll from '../Movies/MoviesAll.jsx';
import { useDispatch, useSelector } from 'react-redux';

function MainPage() {
      
   return (
      <div className='_container' >
         <MoviesAll />
      </div>
   );
}

export default MainPage;
