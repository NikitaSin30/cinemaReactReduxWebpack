import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Componets/MainPage/MainPage.jsx'
import { apiGetMovies } from './ConnectApi/methodAPI/getFilms.jsx'
import { useDispatch } from 'react-redux'
import { putDownMovies, putDownStatusError } from './Store/Actions/action'
import AboutMovie from './Componets/Movies/AboutMovie.jsx'
import Layout from './Componets/RouteLayout/Layout.jsx'

function App() {
   const dispatch = useDispatch()

   async function getMovies() {
      try {
         const { data } = await apiGetMovies()
         dispatch(putDownMovies(data))
      } catch (error) {
         dispatch(putDownStatusError(error))
      }
   }

   useEffect(() => {
      getMovies()
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
