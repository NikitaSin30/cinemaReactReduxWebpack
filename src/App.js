import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Componets/mainPage/MainPage.jsx'
import { useDispatch } from 'react-redux'
import { mountMovies } from './Store/actions/action'
import AboutMovie from './Componets/movies/AboutMovie.jsx'
import Layout from './Componets/routeLayout/Layout.jsx'


function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(mountMovies())
   }, [])

   return (
      <BrowserRouter>
         <div className="App">
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<MainPage />} />
                  <Route path="aboutMovie" element={<AboutMovie />} />
               </Route>
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
