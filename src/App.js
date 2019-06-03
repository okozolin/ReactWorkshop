import React from 'react';
// import React from 'react';
import MovieIndex from './components/pages/MovieIndex';
import MovieDetails from './components/pages/MovieDetails';
import Favorites from './components/pages/Favorites';

function App() {
  return (
       //  shorthand for react not do add divs
      <>
      <h1>Hello ladies</h1>
       < MovieIndex/>
       < MovieDetails/>
       < Favorites/>
</>

  );
}

export default App;
