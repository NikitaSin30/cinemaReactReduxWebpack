import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import './App.css';
import MainPage from './Componets/MainPage';
import FilterTransfer from './Componets/Filters/FilterTransfer';
import Header from './Componets/Header/Header';
import  {getSearchId}  from './ConnectApi/getSearchId';


function App() {

   const getH = async () => {
      let result;
      try {
         result = await getSearchId();
         console.log(result);
         return result
      } catch (error) {
         console.log(error);
         // setMessageError(!messageError);
      }
      // modifySourceHeroes(result);
   };

   useEffect(() => {
      getH();
   });
   return (
      <div className="App">
         <Header />
         <Container className="_container"  maxWidth="1000">
            <FilterTransfer />
            <MainPage />
         </Container>
      </div>
   );
}

export default App;
