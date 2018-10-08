import React, {Component} from 'react';

class ChatRoom extends Component {
  
  constructor(){
    super();
    this.state = {
      mesage: '', 
      message : [
        {id: 0, text:'Prueba 1'},
        {id: 1, text:'Prueba 2'},
        {id: 2, text:'Prueba 3'},
        {id: 3, text:'Hola 1'}
      ]
    }
  }

  submitMessage(e){
    e.preventDefault();
    console.log('submit');
  }

  updateMessage(e){
    this.setState({
      mesage: e.target.value 
    });
    console.log(this.state.mesage);
  }

  render(){

    const { message } = this.state;
    const messageList = message.map(message => {
      return <li key={message.id}> {message.text} </li>
    });

    return(
    
    <div>
      <ol>
        {messageList}
      </ol>
      <form onSubmit={this.submitMessage}>
        <input 
          type="text"
          onChange={this.updateMessage.bind(this)} 
        />
      </form>
    </div>
    )
  }
}

export default ChatRoom;
