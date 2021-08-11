import React from 'react';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//components 
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;
