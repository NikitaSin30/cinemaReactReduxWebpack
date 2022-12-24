import { GET_MOVIES_URL } from './constans'
export default {
   async getMovies() {
      try {
         const response = await fetch(GET_MOVIES_URL)
         const { data } = await response.json()
         return data
      } catch (error) {
         throw error
      }
   },
}
