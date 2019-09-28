import React from 'react';
import MovieListItem from './MovieListItem.jsx'


const MovieList = (props) => {           //props is being passed into the function WITHOUT needing 'this', if not using a class, then don't need 'this', if class and constructor then need 'this'
  console.log(props.movies)
  return (
    <div>
      <ul>{props.movies.map(movie => <MovieListItem movie={movie}/> )}</ul>
       
    </div>
    //console.log returns undefined though because there's nothing to render. so DON'T CONSOL.LOG INSIDE THE RETURN. BEST TO CONSOLE.LOG ABOVE THE RETURN FUNCTION
  );
}

export default MovieList;