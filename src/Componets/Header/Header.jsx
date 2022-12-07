import { AppBar, Toolbar, Button, TextField } from '@mui/material';
// import FilterTitle from "../Filters/FilterTitle.jsx";
import './Header.css';

function Header() {
   return (
    //   <AppBar className='a'>
    //      {/* <FilterTitle/> */}
    //      <Toolbar>
    //         <Button variant="contained">Refresh</Button>
    //      </Toolbar>
    //   </AppBar>

    <header className='header'>
     <div className="header__container _container">
        <div className='header__btn'>
            <Button>Обновить</Button>
        </div>
     <form action="" className="header__form">
     <TextField className='header__input' id="outlined-basic" label="Название фильма" variant="outlined" />
     <Button>Поиск</Button>
     </form>
     </div>
    </header>
   )
}

export default Header;
