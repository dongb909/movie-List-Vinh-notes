import React from 'react';

class App extends React.Component   {   //this line is having you create a child that inherits everything from react.component
  constructor(props) {   //props here are from the react.component, we will create these variables for every memebers of this class
    super(props);  //need to include props bc react automatically assigns something to props, props is an obj that all react components make. by calling super, it attaches all that you passed in at ReactDOM call to the props obj
    this.state = {

    }
  }
  render() {
    return (
      <div> Hello World</div>
    )
  }

}

export default App;  



//do this always when you first import react and make your function so you dont forget


//npm start just starts the server 3000 that you set. it's watching any requests for your server. 
//nodemon is keeping track of any changes in server

//webpack is in charge of transpiling and saving chagnes from react aka client