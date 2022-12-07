// import {setArrayMovies,setError} from '../../Store/Actions/action.js'
import { MOVIES_ALL } from '../constans';

export async function getDataApi() {
   try {
      const result = await fetch(MOVIES_ALL);
      const response = await result.json();
      console.log(response)
      return response;
   } catch (error) {
      throw error;
   }
}

// export async function getMovies () {
//    return dispatch => {
//       try {
//          const movieArray = getMoviesData()
//       dispatch(getArrayMovies(movieArray))
//       } catch (error) {
//        dispatch(setError(error))
//       }

//    }
// }
