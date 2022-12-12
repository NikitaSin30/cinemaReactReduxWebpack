import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { putDownSelectedMovie } from '../../Store/Actions/action.js';

function Movie({ nameRus, posterSmall, id }) {
   const dispatch = useDispatch();
   const movies = useSelector((state) => state.moviesReducer.movies);

   function onClickGetMovie(id) {
      const selectedMovie = movies.filter((movie) => movie.id === id);
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
      dispatch(putDownSelectedMovie(selectedMovie));
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
   );
}

export default Movie;
