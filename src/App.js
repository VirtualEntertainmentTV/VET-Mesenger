import "./App.css";
import SendIcon from "@material-ui/icons/Send";
import { FormControl, Input, IconButton } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("message")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("message").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="app">
      <img
        className="app_logo"
        src="https://i.ibb.co/ZGy3fLJ/VET-MS.png"
        alt=""
      />
      <h3>KEEP IT 100%</h3>
      <h3>🙈 🙉 🙊</h3>
      <form className="app__body">
        <FormControl className="app__form">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <IconButton
            className="app__icon"
            type="submit"
            disabled={!input}
            variant="contained"
            color="primary"
            onClick={sendMessage}
          >
            <SendIcon className="app__sendIcon" />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
