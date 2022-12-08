import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import Header from './Componets/Header/Header.jsx';
import MainPage from './Componets/MainPage/MainPage.jsx';
import { getDataApi } from './ConnectApi/methodAPI/getFilms.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
   setArrayMovies,
   setError,
   getValuyInput,
} from './Store/Actions/action';

function App() {
   const dispatch = useDispatch();
   const stateMovie = useSelector((state) => state.moviesReducer.movies);

   const moviesList = stateMovie.map((item) => {
      return {
         id: item.id,
         nameRus: item.name_russian,
         posterSmall: item.small_poster,
      };
   });



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



   const [inputValue, setInputValue] = useState('')

      const filterTitle = (e) =>{
         setInputValue(e.target.value)
         // console.log(inputValue)
    }

   return (
      <div className="App">
         <Header filterTitle={filterTitle}/>
         <MainPage moviesList={moviesList}/>
      </div>
   );
}

export default App;
