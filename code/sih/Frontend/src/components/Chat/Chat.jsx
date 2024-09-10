import React, { useState } from 'react';
import { Home, Send } from 'lucide-react';
import './chat.css';
import { GoogleGenerativeAI } from '@google/generative-ai';
import user from '../assets/user-account-person-avatar-svgrepo-com.png'
import genai from '../assets/dialogflow-svgrepo-com.png'

// Sidebar Component
const Sidebar = ({ recentChats, onChatClick }) => {
  const handleHomeClick = () => {
    window.location.href = '/'; // Redirect to the home page
  };

  return (
    <div className="chat-app-sidebar">
      <button className="chat-app-menu-button" onClick={handleHomeClick}>
        <Home size={24} />
      </button>
      <div className="chat-app-recent-chats">
        <h3>Recent Chats</h3>
        {recentChats.map((chat, index) => (
          <div
            key={index}
            className="chat-app-chat-item"
            onClick={() => onChatClick(index)}
          >
            <div className="chat-snippet">
              <strong>User:</strong> {chat.userMessage.slice(0, 10)}...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Header Component
const Header = () => (
  <div className="chat-app-header">
    <h1>Chat App</h1>
  </div>
);

// ChatInput Component
const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="chat-app-input-container">
      <input
        type="text"
        placeholder="Enter a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        className="chat-app-input"
      />
      <button className="chat-app-send-button" onClick={handleSend}>
        <Send size={20} />
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  const [recentChats, setRecentChats] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(null);

  // Initialize the Google Generative AI client
  const genAI = new GoogleGenerativeAI('AIzaSyCawcXRC_tJ0_vxtMhrYM5A0s20Z_JRbxc'); // Replace with your API key

  const handleSendMessage = async (message) => {
    console.log("Message sent:", message);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(message);

      const geminiResponse = await result.response.text();

      // Update chat history with the new conversation
      const newChat = { userMessage: message, geminiResponse };
      setChatHistory([...chatHistory, newChat]);

      // Also update the recent chats to store snapshots of chat instances
      setRecentChats([...recentChats, newChat]);

    } catch (error) {
      console.error('Error generating response:', error);
    }
  };

  const handleChatClick = (index) => {
    setCurrentChatIndex(index);
    // Redirect or update the view to show the selected chat's details
    // For now, we'll just log the index to the console
    console.log('Chat clicked:', index);
  };

  return (
    <div className="chat-app">
      <Sidebar recentChats={recentChats} onChatClick={handleChatClick} />
      <div className="chat-app-main-content">
        <Header />

        {/* Chat History Display */}
        <div className="chat-app-chat-history">
          {currentChatIndex !== null ? (
            <div className="chat-message-container">
              {/* Gemini Message */}
              <div className="chat-message gemini">
                <img src={genai} alt="Gemini Avatar" className="avatar" />
                <div className="message-content">
                  {recentChats[currentChatIndex].geminiResponse}
                </div>
              </div>

              {/* User Message */}
              <div className="chat-message user">
                <div className="message-content">
                  {recentChats[currentChatIndex].userMessage}
                </div>
                <img src={user} alt="User Avatar" className="avatar" />
              </div>
            </div>
          ) : (
            <div className="chat-app-chat-history">
              {chatHistory.map((chat, index) => (
                <div key={index} className="chat-message-container">
                  {/* User Message */}
                  <div className="chat-message user">
                    <div className="message-content">
                      {chat.userMessage}
                    </div>
                    <img src={user} alt="User Avatar" className="avatar" />
                  </div>

                  {/* Gemini Message */}
                  <div className="chat-message gemini">
                    <img src={genai} alt="Gemini Avatar" className="avatar" />
                    <div className="message-content">
                      {chat.geminiResponse}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chat Input Field */}
        {currentChatIndex === null && (
          <ChatInput onSend={handleSendMessage} />
        )}
      </div>
    </div>
  );
};

export default App;
