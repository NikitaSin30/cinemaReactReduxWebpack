import { Container } from '@mui/system';
import FilterTimePrice from './Filters/FilterTimePrice';
import Tickets from './Tickets/Tickets';

function MainPage() {
   const style = {
      display: 'grid',
      gridTemplateColums: '1fr',
      gap: '20px',
   }
   return (
      <div style={style}>
         <FilterTimePrice />
         <Tickets/>
      </div>
   );
}

export default MainPage;
