import { ButtonGroup, Button} from '@mui/material';
// import filter from '/Filters/FilterTimePrime.css'

function FilterTimePrice() {
   const style = {
      display: 'grid',
   gridTemplateColumns: '1fr 1fr 1fr',
   gridTemplateRows: '50px',
   justifyContent: 'center',
   minWidth: '100%',
   }
   const style2 = {
      minHeight: '50px'
   }
   return (

         <ButtonGroup
         className='button__group'
         style={style}
            variant="outlined"
            aria-label="outlined button group"
         >
            <Button className="btn">Самый дешевый</Button>
            <Button className="btn primary">Самый быстрый</Button>
            <Button className="btn">Оптимальный</Button>
         </ButtonGroup>



   );
}

export default FilterTimePrice;
