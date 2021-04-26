import React from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import './Styles.css';
import { FormattedMessage, FormattedDate} from "react-intl";




function App() {

  
  


  return (
    <div className="App">
      <Header/>
      <div className="main">
        <h1 className="titulo">
          <FormattedMessage 
            id="app.welcome"
            defaultMessage="Welcome"
            values={
              {
                name:"Cristian"
                
              }
            }
           />
        </h1>
        <p className="subtitulo">
          <FormattedDate
            value={Date.now() }
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"              
          />
        </p>
        <Grid/>
      </div>
     
    </div>
  );
}

export default App;
