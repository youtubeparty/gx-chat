import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
    const [messages, setMessages] = useState(["hello", "I love GX!", "where am i????"]);
    const [newMessage, setNewMessage] = useState("");

    const handleNewMsgChange = (e) => {
        setNewMessage(e.target.value);
    };
    const handleNewMsgSubmit = (e) => {
        e.preventDefault();
        setMessages([...messages, newMessage]);
        setNewMessage("");
    };
    return (
        <div className="App">
            <img src="/gx-logo.jpg" style={{ position: "sticky", top: "5px", left: "5px", height: "50px" }} />
            <div id="chatbox-parent">
                <div id="chatbox">
                    {messages.map((msg) => (
                        <div className="message">{msg}</div>
                    ))}
                </div>
                <div id="new-message-box">
                    <form onSubmit={handleNewMsgSubmit}>
                        <input type="text" value={newMessage} onChange={handleNewMsgChange}></input>
                        <button type="submit">Post!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
