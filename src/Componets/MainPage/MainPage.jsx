import MoviesAll from '../Movies/MoviesAll.jsx';

function MainPage({ moviesList }) {
   return (
      <div className="_container">
         <MoviesAll moviesList={moviesList} />
      </div>
   );
}

export default MainPage;
