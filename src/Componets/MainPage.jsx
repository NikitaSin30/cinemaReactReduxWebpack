import FilterTimePrice from './Filters/FilterTimePrice';
import Tickets from './Tickets/Tickets';
import '../Componets/MainPage.css'

function MainPage() {
   return (
      <div className='page__name'>
         <FilterTimePrice />
         <Tickets/>
      </div>
   );
}

export default MainPage;
