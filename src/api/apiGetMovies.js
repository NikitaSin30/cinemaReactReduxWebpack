import { GET_MOVIES_URL } from "./constans"
export async function apiGetMovies () {
    try {
       const result = await fetch(GET_MOVIES_URL)
       return result
    } catch (error) {
      throw error
    }
}
