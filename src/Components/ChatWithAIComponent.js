import React, { useState, useEffect } from 'react';
import '../Css/ai.css';
import axios from 'axios'
import { useUser } from '../Contexts/UserContext.js';


const ChatWithAIComponent = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [displayedResponse, setDisplayedResponse] = useState(''); // Part of the response currently displayed
    const [recognition, setRecognition] = useState(null);
    const [inputText, setInputText] = useState(''); // State for the text input
    const [isLoading, setIsLoading] = useState(false); // Track if ChatGPT is processing
    const [messages, setMessages] = useState([]); // Array to hold the conversation
    const [chatStarted, setChatStarted] = useState(false);
    const {userProfile} = useUser()

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognitionInstance = new SpeechRecognition();
            recognitionInstance.continuous = true;
            recognitionInstance.interimResults = true;
            recognitionInstance.onresult = (event) => {
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        const transcript = event.results[i][0].transcript.trim();
                        setInputText(transcript); // Only update text field with recognized speech
                    }
                }
            };
            setRecognition(recognitionInstance);
        } else {
            console.log("Speech recognition not supported.");
        }
    }, []);
    
    const startRecording = () => {
        if (!isListening && recognition) {
            setIsListening(true);
            recognition.start();
        }
    };
    const stopRecording = () => {
        if (isListening && recognition) {
            setIsListening(false);
            recognition.stop();
            // Do not automatically submit the text here
            // The user will review and submit manually
        }
    };
    
      
      const handleSubmitText = async (text) => {
        if (text.trim() === '') return;
        setChatStarted(true);
        setIsLoading(true);
      
        const newUserMessage = { text, sender: 'user' };
        const loadingMessage = { text: 'Loading...', sender: 'loading' }; // Temporary loading message
      
        // Add user message and loading message
        setMessages(messages => [...messages, newUserMessage, loadingMessage]);
        const privileges = userProfile.privileges; // Assuming privileges is an array or similar structure

        // Decide the URL based on the user's role
        const url = (privileges === 'admin' || privileges === 'dev') ? 'https://intellachat-kwtb.onrender.com/chat' : 'https://intellachatuser.onrender.com/chat';
      
        const data = JSON.stringify({ query: text });
        const config = {
          method: 'post',
          url: url, // Use the URL based on the user's role
          headers: { 'Content-Type': 'application/json' },
          data: data,
        };
      
        try {
          const response = await axios.request(config);
      
          // Remove the temporary loading message and add the AI response
          setMessages(messages => {
            let newMessages = messages.slice(0, -1); // Remove the last message (loading message)
            if (response.data.response && response.data.response.output) {
              const newAiMessage = { text: response.data.response.output, sender: 'ai' };
              newMessages = [...newMessages, newAiMessage];
            }
            return newMessages;
          });
        } catch (error) {
          console.error("Error during server request:", error);
          // Handle errors as needed
        } finally {
          setIsLoading(false);
        }
      };

  return (
        
        <div className="chat-container">
                    {!chatStarted && (
            <div className="chat-header">
            <span className="sparkle-emoji">IntellaChat AI✨ isn't trained to make casual conversations. IntellaChat is trained to provide you the most up-to-date information on historical prefixes.
            </span>           
            </div>
        )}
            <div className="chat-messages">
                {messages.map((msg, index) => {
                    // Check if the message is a loading message
                    if (msg.sender === 'loading') {
                        return (
                            <div key={index} className="message ai">
                                {/* AI Tag */}
                                <div className="message-tag">AI ✨</div>
                                {/* Loading Animation */}
                                <div className="loading-dots">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        );
                    } else {
                        // Render regular messages
                        return (
                            <div key={index} className={`message ${msg.sender}`}>
                                <div className="message-tag">
                                    {msg.sender.toUpperCase()} {msg.sender === 'ai' && '✨'}
                                </div>
                                <p>{msg.text}</p>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message..."
                    className="text-input"
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmitText(inputText)}
                    disabled={isLoading}
                />
                <button onClick={() => handleSubmitText(inputText)} className="send-button">
                    Send
                </button>
            </div>
                    <div className="control-buttons">
                            <button
            disabled={isLoading}
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            onTouchStart={startRecording}
            onTouchEnd={stopRecording}
            className={`control-btn ${isListening ? 'listening' : ''}`}>
            🎙️
        </button>

        </div>

        </div>
    );
};
export default ChatWithAIComponent;
