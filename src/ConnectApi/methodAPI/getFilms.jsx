import { GET_MOVIES_URL } from '../constans';

export async function apiGetMovies() {
   try {
      const result = await fetch(GET_MOVIES_URL);
      const response = await result.json();
      return response;
   } catch (error) {
      throw error;
   }
}

//  export function modifySourceMovies (data) {
//    return data.map((item) => {
//       return{
//         id:item.id,
//         name_russian:item.name_russian,
//         small_poster:item.small_poster,
//         big_poster:item.big_poster,
//         persons:item.persons,
//         genres:item.genres,
//         description:item.description,
//         trailer:item.trailer,
//       }
//     })
//   }

// export default {getMovie,modifySourceMovies}
