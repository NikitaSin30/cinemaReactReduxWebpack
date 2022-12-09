import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Movie({ nameRus, posterSmall, id }) {
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
               <Link to={`aboutMovie${id}`}>Подробнее</Link>
            </CardActions>
         </Card>
      </>
   );
}

export default Movie;
