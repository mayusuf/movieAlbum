import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import CreateMovie from './components/CreateMovie';
import ShowMovieList from './components/ShowMovieList';
import ShowMovieDetails from './components/ShowMovieDetails';
import UpdateMovieInfo from './components/UpdateMovieInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<ShowMovieList />} />
          <Route path='/create-book' element={<CreateMovie />} />
          <Route path='/edit-book/:id' element={<UpdateMovieInfo />} />
          <Route path='/show-movie/:id' element={<ShowMovieDetails />} />
        </Routes>
      </Router>
    );
  }
}

export default App;