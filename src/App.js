import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Componets/MainPage/MainPage.jsx';
import { getDataApi } from './ConnectApi/methodAPI/getFilms.jsx';
import { useDispatch } from 'react-redux';
import { setArrayMovies, setError } from './Store/Actions/action';
import AboutMovie from './Componets/Movies/AboutMovie.jsx';
import Layout from './RouteLayout/Layout.jsx';

function App() {
   const dispatch = useDispatch();

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
   );
}

export default App;
