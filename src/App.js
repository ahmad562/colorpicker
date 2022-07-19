import React from 'react';
import Colores from './Colores';
import './App.css';
import { purple, red, blue,indigo,teal,lime,orange,yellow,green } from '@mui/material/colors';

//functional component

class App extends React.Component{
    state = { colores:[
      purple[500],
      purple[400],
      red[400],
      red[500],
      blue[400],
      blue[500],
      indigo[400],
      indigo[500],
      teal[400],
      teal[500],
      lime[400],
      lime[500],
      orange[400],
      orange[500],
      yellow[400],
      yellow[500],
      green[400],
      green[500],
    ] 
    }
    render(){
      return(
        <div className='App'>
          <Colores colorNames={this.state.colores} />

        </div>
      )
    }
}

export default App;
