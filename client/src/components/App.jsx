import React from 'react';
import MovieList from './MovieList.jsx'
import MovieListItem from './MovieListItem.jsx'
import Axios from 'axios';

class App extends React.Component   {   //this line is having you create a child that inherits everything from react.component
  constructor(props) {   //props here are from the react.component, we will create these variables for every memebers of this class
    super(props);  //need to include props bc react automatically assigns something to props, props is an obj that all react components make. by calling super, it attaches all that you passed in at ReactDOM call to the props obj
    this.state = {
      movies:[]
    }
    this.getMovies = this.getMovies.bind(this);  //must bind all your methods in your class bc it will be invoked by afunction that may or may not have access to this propoert
    //super attaches 'this' to the constructor but only in class to access the constructor
  }
  getMovies() {
    Axios.get('/movies')      //DO NOT PUT A SEMICOLON HERE, YOU'LL GET AN ERROR BC YOU'RE USING PROMISES
    .then((movies) => {
      console.log(movies) //doesn't console log because hasn't gotten here yet because this is asynch, we need to initialize our data with an empty array in order to map it before we replace the array 
      this.setState({
        movies: movies.data   //.data becaues it's from the response obj that we get back
      })
    })
  }

  componentDidMount() {
    this.getMovies()
  }
  // var eachMovie = this.props.data.map((movie)=> <div> {this.props.data.title} </div>); doesn't work, this was YOU
  render() {
    return (
      <div> 
  
        <h1> Movie List </h1>
        <MovieList movies={this.state.movies}/>   
      </div>
   
    
    )
    //when the movies changes then React will automatically rerun MovieList. so it'll rerender this small peice of the page
  }

}
//movie is each obj

export default App;  


//div is an enclosing tag bc it can contain other nodes, or ul or ol but you can't have h1 bc it's a single node that can't contain other nodes
//do this always when you first import react and make your function so you dont forget
//React can only render a single element thus you always have to wrap your render with a div


//npm start just starts the server 3000 that you set. it's watching any requests for your server. 
//nodemon is keeping track of any changes in server

//webpack is in charge of transpiling and saving chagnes from react aka client
//   /* //every time you do this, you're istanciating a NEW class
      // this.props.message
      // </div> */
      // {/* <div>{this.props.data.map(movie => movie.title)} </div>   don't do this*/}
  /* <ul>{this.props.data.map(movie => <li>{movie.title}</li>)} </ul>  it's better to put this in a component */
      // </div>