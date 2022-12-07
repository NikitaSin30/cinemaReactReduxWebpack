import React, { useEffect } from 'react';
import './App.css';
import Header from './Componets/Header/Header.jsx';
import MainPage from './Componets/MainPage/MainPage.jsx';
import { getDataApi } from './ConnectApi/methodAPI/getFilms.jsx';
import { useDispatch } from 'react-redux';
import { setArrayMovies, setError } from './Store/Actions/action';

function App() {
   const dispatch = useDispatch();

   async function getMovies() {
      try {
         const movieArray = await getDataApi();
         console.log(movieArray);
         dispatch(setArrayMovies(movieArray.data));
      } catch (error) {
         dispatch(setError(error));
      }
   }

   useEffect(() => {
      getMovies();
   }, []);

   return (
      <div className="App">
         <Header />
         <MainPage />
      </div>
   );
}

export default App;
