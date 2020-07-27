
import React, { Component } from 'react';
// import axios from 'axios';
import { Widget,addResponseMessage, addLinkSnippet, addUserMessage  } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import { avatar } from '../../assets/avatar.png';
import './style.css';

class Chatbot extends Component {
    componentDidMount() {
        addResponseMessage("Hey there! I am Foxy. May I know your name?");
      }
      handleNewUserMessage = (newMessage) => {
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("text", newMessage);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        
        fetch("", requestOptions)
          .then(response => response.json())
          .then(result => {
            addResponseMessage(result);
            console.log(result);
          })
          .catch(error => console.log('error', error));

        // addLinkSnippet(    
        // {
        //     title: 'Licence Application',
        //     link: 'https://github.com/Wolox/react-chat-widget',
        //     target: '_blank'
        //   }
          // )
      }
    render() {
        return (
          <div>
            <Widget 
                handleNewUserMessage={this.handleNewUserMessage}
                profileAvatar={avatar}
                titleAvatar={avatar}
                badge= {5}
                title="Foxy Bot"
                subtitle="Your Platform Assistant"
            />
          </div>
        );
  }
}
 
export default Chatbot;