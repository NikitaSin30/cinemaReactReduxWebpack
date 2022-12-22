import Header from '../header/Header.jsx'
import { Outlet } from 'react-router-dom'
import ErrorComponets from '../errorComponets/ErrorComponets.jsx'
import { useSelector } from 'react-redux'
import LoadingComponent from '../loadinComponent/LoadingComponents.jsx'
function Layout() {
   const isError = useSelector((state) => state.moviesReducer.isError)
   const isLoading = useSelector((state) => state.moviesReducer.isLoading)

   return (
      <>
         <Header />
         {/* {isLoading ? <LoadingComponent/> : <Outlet/>} */}
         {isError ? <ErrorComponets /> : <Outlet />}
      </>
   )
}

export default Layout
