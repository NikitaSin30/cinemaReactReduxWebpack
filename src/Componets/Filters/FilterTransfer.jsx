import { FormGroup,FormControlLabel,Checkbox } from "@mui/material"

const style = {
    display:'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    backgroundColor : 'white',
    padding :'10px',
    maxHeight: '300px',
}

function FilterTransfer(params) {
    return (

        <FormGroup style={style} className="formGroup">
        <h2>Количесво пересадок</h2>
          <FormControlLabel
            control={
              <Checkbox  name="gilad" />
            }
            label="Все"
          />
          <FormControlLabel
            control={
              <Checkbox />
            }
            label="Без пересадок"
          />
          <FormControlLabel
            control={
              <Checkbox   />
            }
            label="1 пересадка"
          />
           <FormControlLabel
            control={
              <Checkbox   />
            }
            label="2 пересадки"
          />
           <FormControlLabel
            control={
              <Checkbox   />
            }
            label="3 пересадки"
          />
        </FormGroup>

    )
}

export default FilterTransfer
