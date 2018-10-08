import React, {Component} from 'react';
import ChatRoom from './components/ChatRoom';

class App extends Component{
  render() {
    return(
      <div>
        <center>
         <h1> Ejemplo Chat ReactJs</h1>
        </center>
        <ChatRoom/>
      </div>
    )
  }
}

export default App;