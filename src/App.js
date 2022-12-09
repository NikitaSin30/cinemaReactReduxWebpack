import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header/Header.jsx';
import MainPage from './Componets/MainPage/MainPage.jsx';
import { getDataApi } from './ConnectApi/methodAPI/getFilms.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setArrayMovies, setError } from './Store/Actions/action';
import AboutMovie from './Componets/Movies/AboutMovie.jsx';

function App() {
   const dispatch = useDispatch();
   const stateMovie = useSelector((state) => state.moviesReducer.movies);

   const moviesList = stateMovie.map((item) => {
      return {
         id: item.id,
         nameRus: item.name_russian,
         posterSmall: item.small_poster,
         bigPoster: item.big_poster,
         description: item.description,
         year: item.year,
      };
   });
   console.log(stateMovie);

   async function getMovies() {
      try {
         const { data } = await getDataApi();
         dispatch(setArrayMovies(data));
      } catch (error) {
         dispatch(setError(error));
      }
   }

   useEffect(() => {
      getMovies();
   }, []);

   function refreshPage() {
      getMovies();
   }

   return (
      <BrowserRouter>
         <div className="App">
            <Header refreshPage={refreshPage} />
            <Routes>
               <Route path="/" element={<MainPage moviesList={moviesList} />} />
               <Route
                  path={`aboutMovie`}
                  element={<AboutMovie moviesList={moviesList} />}
               />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
