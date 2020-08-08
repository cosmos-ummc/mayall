import React, { Component } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import { ChatList } from "../chat-list";
import { ChatBox } from "../chat-box";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: [],
    };
  }

  componentDidMount() {
    const username = window.prompt("Username: ", "Anonymous");
    this.setState({ username });
    const pusher = new Pusher("ec07749c8ce28d32448a", {
      cluster: "ap1",
      encrypted: true,
    });
    const channel = pusher.subscribe("roomA");
    channel.bind("message", (data) => {
      this.setState({ chats: [...this.state.chats, data] });
    });
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    if (e.keyCode === 13) {
      const payload = {
        username: this.state.username,
        message: this.state.text,
      };
      axios.post("http://localhost:5000/message", payload);
    } else {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Pusher Chat</h1>
        </header>
        <section>
          <ChatList chats={this.state.chats} />
          <ChatBox
            text={this.state.text}
            username={this.state.username}
            handleTextChange={this.handleTextChange}
          />
        </section>
      </div>
    );
  }
}

export default ChatRoom;
