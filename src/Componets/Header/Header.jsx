import { AppBar, Toolbar, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getValuyInput } from '../../Store/Actions/action.js';
import './Header.css';

function Header({filterTitle}) {
   //    const [inputValue, setInputValue] = useState('')

   //    const filterTitle = (e) =>{
   //       setInputValue(e.target.value)
   //       console.log(inputValue)
   //  }

   
   // const dispatch = useDispatch();
   // const filterTitle = (e) => {
   //    const inputValue = e.target.value;
   //    dispatch(getValuyInput(inputValue));
   // };
   return (
      <header className="header">
         <div className="header__container _container">
            <div className="header__btn">
               <Button>Обновить</Button>
            </div>
            <form action="" className="header__form">
               <TextField
                  className="header__search"
                  id="outlined-basic"
                  label="Название фильма"
                  variant="outlined"
                  onChange={filterTitle}
               />
               <Button>Поиск</Button>
            </form>
         </div>
      </header>
   );
}

export default Header;
