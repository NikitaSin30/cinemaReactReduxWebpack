import Header from "../Componets/Header/Header.jsx";
import { Outlet } from 'react-router-dom';

function Layout () {
    return(
        <>
        <Header/>

         <Outlet/>

         <footer></footer>

        </>
    )
}

export default Layout
