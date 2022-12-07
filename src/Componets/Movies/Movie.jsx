import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Movies() {

   return (
      <>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Название филмьа
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
      </>
   );
}


export default Movies;
