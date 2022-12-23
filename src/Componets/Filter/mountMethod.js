export const mountSelectGenres = (arr) => {
   let genres = []
   arr.forEach((movie) => {
      return movie.genres.forEach((item) => {
         if (!genres.includes(item.name_ru)) {
            genres.push(item.name_ru)
         }
      })
   })
   return genres
}

export const mountSelectReleaseYear = (arr) => {
   let releaseYear = []
   arr.forEach((movie) => {
      if (!releaseYear.includes(movie.year)) {
         releaseYear.push(movie.year)
      }
   })

   return releaseYear.sort((a, b) => b - a)
}
