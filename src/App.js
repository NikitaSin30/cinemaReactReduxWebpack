import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import './App.css';
import MainPage from './Componets/MainPage';
import FilterTransfer from './Componets/Filters/FilterTransfer';
import Header from './Componets/Header/Header';
import { getTicketsAll } from './ConnectApi/getTicketsAll';
import  {getSearchId}  from './ConnectApi/getSearchId';

const style = {
   display: 'grid',
   gridTemplateColumns: '2fr 5fr',
   gap: '20px',
   maxWidth: '1100px',
   gap: '20px',
};

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
         <Container className="_container" style={style} maxWidth="1000">
            <FilterTransfer />
            <MainPage />
         </Container>
      </div>
   );
}

export default App;
