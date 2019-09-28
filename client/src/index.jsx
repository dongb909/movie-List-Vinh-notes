import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'

ReactDOM.render(<App />, document.getElementById('app'));
//this is creating a new verison of App, istantiating.
//if you assign props to App here then your class component HAS to accept props aka it HAS to have a props as a parameter
//react allows us to pass props when we are istantiating the App, the equiv of:
//var App = new App ('Hello World')



//React when it sees <  /> it creates html from the code that you have inside your render functions. and puts it into the node chosen. React is an obj with methods
//error type is invalid -- because it's expecting a class or a function but it's just getting an obj from App.jsx since the import React is just an obj that is imported
