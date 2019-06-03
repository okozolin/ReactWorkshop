import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import MovieIndex from './components/pages/MovieIndex';
import MovieDetails from './components/pages/MovieDetails';
import Favorites from './components/pages/Favorites';

function App() {
  return (
      <BrowserRouter>
          <Route exact path='/' component={MovieIndex}/>
          <Route path='/movieindex' component={MovieIndex}/>
          <Route path='/moviedetails' component={MovieDetails}/>
          <Route path='/favorites' component={Favorites}/>
      </BrowserRouter>

  );
}

export default App;
