import { ButtonGroup, Button } from '@mui/material';
import './FilterTimePrice.css';

function FilterTimePrice() {
   const styleWidth = {
      display: 'grid',
      minWidth: '100%',
   };
   return (
      <ButtonGroup
         style={styleWidth}
         className="button__group"
         variant="outlined"
         aria-label="outlined button group"
      >
         <Button className="btn">Самый дешевый</Button>
         <Button className="btn ">Самый быстрый</Button>
         <Button className="btn">Оптимальный</Button>
      </ButtonGroup>
   );
}

export default FilterTimePrice;
