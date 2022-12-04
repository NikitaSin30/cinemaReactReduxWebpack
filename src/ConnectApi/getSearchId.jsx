import { SEARCH_ID } from './constans';

export async function getSearchId() {
   try {
      const result = await fetch(SEARCH_ID);
      const response = await result.json();
      console.log(response)
      return response;
   } catch (error) {
      throw error;
   }
}
