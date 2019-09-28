import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import movies from './components/dummyData.js';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

// var movieStrings = ['Mean Girls', 'Hackers'] 

//if put data here then in App below then do data = movies
//but can't do that bc you're returning and OBJECT! invariant violation when you can' trender that to html
//it CAN read arrays, just not the Objects inside the arry




ReactDOM.render(<App message="Hiiii World" data={movies} />, document.getElementById('app'));
// ReactDOM.render(<App message="Hiiii World" movie={movieStrings}/>, document.getElementById('app'));   //this works because it can render arrays without printing the [ ] and ,



                                          //to use variables on this page the must put in {} instead of quotes. 
//this is creating a new verison of App, istantiating.
//if you assign props to App here then your class component HAS to accept props aka it HAS to have a props as a parameter
//react allows us to pass props when we are istantiating the App, the equiv of:
//var App = new App ('Hello World')



//React when it sees <  /> it creates html from the code that you have inside your render functions. and puts it into the node chosen. React is an obj with methods
//error type is invalid -- because it's expecting a class or a function but it's just getting an obj from App.jsx since the import React is just an obj that is imported

