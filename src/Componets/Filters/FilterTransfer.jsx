import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import './FilterTransfer.css'

function FilterTransfer() {
   return (
      <FormGroup  className="page__formGroup formGroup ">
         <h2 className='formGroup__title' >Количесво пересадок</h2>
         <FormControlLabel control={<Checkbox name="gilad" />} label="Все" />
         <FormControlLabel control={<Checkbox />} label="Без пересадок" />
         <FormControlLabel control={<Checkbox />} label="1 пересадка" />
         <FormControlLabel control={<Checkbox />} label="2 пересадки" />
         <FormControlLabel control={<Checkbox />} label="3 пересадки" />
      </FormGroup>
   );
}

export default FilterTransfer;
