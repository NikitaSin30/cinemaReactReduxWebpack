import Header from '../header/Header.jsx'
import { Outlet } from 'react-router-dom'
import ErrorComponets from '../errorComponets/ErrorComponets.jsx'
import { useSelector } from 'react-redux'

function Layout() {
   const error = useSelector((state) => state.moviesReducer.error)

   return (
      <>
         <Header />
         {error ? <ErrorComponets /> : <Outlet />}
      </>
   )
}

export default Layout
