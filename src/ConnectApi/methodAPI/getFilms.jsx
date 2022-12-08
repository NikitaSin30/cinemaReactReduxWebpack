
import { MOVIES_ALL } from '../constans';

export async function getDataApi() {
   try {
      const result = await fetch(MOVIES_ALL);
      const response = await result.json();
      return response;
   } catch (error) {
      throw error;
   }
}
