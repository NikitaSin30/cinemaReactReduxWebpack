import { GET_MOVIES_URL } from '../constans';

export async function getDataApi() {
   try {
      const result = await fetch(GET_MOVIES_URL);
      const response = await result.json();
      return response;
   } catch (error) {
      throw error;
   }
}
