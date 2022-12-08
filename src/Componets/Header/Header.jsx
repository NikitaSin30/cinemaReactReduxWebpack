import { AppBar, Toolbar, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setValueInputState } from '../../Store/Actions/action.js';
import './Header.css';

function Header({ refreshPage }) {

   const dispatch = useDispatch();
   const getValueInput = (e) => {
      const inputValue = e.target.value.toLowerCase().trim();
      dispatch(setValueInputState(inputValue));
   };
   return (
      <header className="header">
         <div className="header__container _container">
            <div className="header__btn">
               <Button onClick={refreshPage}>Обновить</Button>
            </div>
            <form action="" className="header__form">
               <TextField
                  className="header__search"
                  id="outlined-basic"
                  label="Название фильма"
                  variant="outlined"
                  onChange={getValueInput}
               />
               <Button>Поиск</Button>
            </form>
         </div>
      </header>
   );
}

export default Header;
