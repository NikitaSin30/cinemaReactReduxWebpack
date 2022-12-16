import { GET_MOVIES_URL } from '../constans.js'

export async function apiGetMovies() {
   try {
      const result = await fetch(GET_MOVIES_URL)
      const response = await result.json()
      return response
   } catch (error) {
      throw error
   }
}
