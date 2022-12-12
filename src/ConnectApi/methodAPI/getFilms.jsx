import { GET_MOVIES_URL } from '../constans';

 async function getMovie() {
   try {
      const result = await fetch(GET_MOVIES_URL);
      const response = await result.json();
      return response;
   } catch (error) {
      throw error;
   }
}

export default getMovie
