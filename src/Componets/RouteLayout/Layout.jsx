import Header from '../header/Header.jsx'
import { Outlet } from 'react-router-dom'
import ErrorComponets from '../errorComponets/ErrorComponets.jsx'
import { useSelector } from 'react-redux'
import LoadingComponent from '../loadinComponent/LoadingComponents.jsx'
function Layout() {
   const error = useSelector((state) => state.moviesReducer.error)
   const load = useSelector((state) => state.moviesReducer.loading)
   console.log(load)
   return (
      <>
         <Header />
         {load ? <LoadingComponent/> : <Outlet/>}
         {error ? <ErrorComponets /> : <Outlet />}
      </>
   )
}

export default Layout
