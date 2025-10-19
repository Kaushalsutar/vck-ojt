import React, { useState, useEffect, useRef } from "react";
import knowledgeBase from "../../data/knowledgeBase.json";
import "./Chatbot.css";

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: knowledgeBase.greeting.response }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findResponse = (userInput) => {
    const cleanedInput = userInput.toLowerCase().trim();

    for (const key in knowledgeBase) {
      const entry = knowledgeBase[key];
      if (!entry.examples) continue;
      for (const example of entry.examples) {
        if (cleanedInput.includes(example.toLowerCase())) {
          return entry.response;
        }
      }
    }

    return knowledgeBase.default.response;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = {
      sender: "bot",
      text: findResponse(input)
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-open-button" onClick={() => setIsOpen(true)}>
          <img src="/Images/operator_480.png" className="chatbot-icon" alt="Open Chat" />
        </button>
      )}

      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <span className="chatbot-title">VCK Assistant</span>
          <button className="chatbot-close-button" onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-row ${msg.sender}`}>
              <div className="avatar">{msg.sender === "bot" ? "🤖" : "🧑"}</div>
              <div className={msg.sender === "bot" ? "bot-message" : "user-message"}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input
            className="message-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;
