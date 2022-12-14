import Card from '@mui/material/Card'
import { Link } from 'react-router-dom'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'

function Movie({ nameRus, posterSmall, id }) {
   const movies = useSelector((state) => state.moviesReducer.movies)

   function onClickGetMovie(id) {
      const selectedMovie = movies.filter((movie) => movie.id === id)
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie))
   }

   return (
      <>
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={posterSmall} alt="green iguana" />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {nameRus}
               </Typography>
            </CardContent>
            <CardActions>
               <Link to={`aboutMovie`} onClick={() => onClickGetMovie(id)}>
                  Подробнее
               </Link>
            </CardActions>
         </Card>
      </>
   )
}

export default Movie
