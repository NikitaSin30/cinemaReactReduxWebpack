import { Box } from '@mui/material';
function Ticket() {
   const style = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '100%',
   };
   const box = {
      backgroundColor: 'white',
      padding: '30px',
   };
   const tabl = {
      minWidth: '100%',
   };
   return (

         <div style={box} className="priceAndCompanyLogo">
            <div style={style}>
               <h2 className="price">12100</h2>
               <div>
                  <img src="/S7 Logo.png" alt="компания лого" />
               </div>
            </div>
            <div className="transfer">
               <table style={tabl}>
                  <tr>
                     <td>A-B</td>
                     <td>В пути</td>
                     <td>кол-во пересадок</td>
                  </tr>
                  <tr>
                     <td>time - time</td>
                     <td>allTime</td>
                     <td>точки пересадок</td>
                  </tr>
               </table>
               <div>
                  <table style={tabl}>
                     <tr>
                        <td>A - B</td>
                        <td>В пути</td>
                        <td>кол-во пересадок</td>
                     </tr>
                     <tr>
                        <td>time - time</td>
                        <td>allTime</td>
                        <td>точки пересадок</td>
                     </tr>
                  </table>
               </div>
            </div>
         </div>
   );
}

export default Ticket;
