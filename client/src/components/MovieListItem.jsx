import React from 'react';

// console.log(props)

const MovieListItem = (props) => {          
  return (
    <li>
      {props.movie.title} 
    </li>
  
  );
}
export default MovieListItem;