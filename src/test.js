const axios = require('axios');

// Mock functions to simulate state changes and message handling
let isLoading = false;
let messages = [];

const setIsLoading = (loading) => {
    isLoading = loading;
    console.log(`Is Loading: ${isLoading}`);
};

const setMessages = (newMessages) => {
    messages = newMessages;
    console.log('Messages:', messages);
};

const setInputText = (text) => {
    console.log(`Input Text Cleared: '${text}'`);
};

// Adapted handleSubmitText function for standalone use
const handleSubmitText = async (text) => {
    if (text.trim() === '') return;
    setIsLoading(true);
    
    const newUserMessage = { text, sender: 'user' };
    setMessages([...messages, newUserMessage]);
    
    // Assuming 'recognition.stop()' is related to speech recognition
    // In a standalone script, there might not be a direct equivalent
    // This would be a place to stop any ongoing operations related to input
    
    const data = JSON.stringify({ query: text });
    const config = {
        method: 'post',
        url: 'https://intellachat-kwtb.onrender.com/chat',
        headers: { 
            'Content-Type': 'application/json',
        },
        data: data,
    };
    
    try {
        const response = await axios.request(config);
        
        if (response.data.response && response.data.response.output) {
            const newAiMessage = { text: response.data.response.output, sender: 'ai' };
            setMessages([...messages, newAiMessage]);
        } else {
            throw new Error("Unexpected response structure");
        }
    } catch (error) {
        console.error("Error calling local server:", error);
        setMessages([...messages, { text: "Failed to get a response. Please try again.", sender: 'ai' }]);
    } finally {
        setIsLoading(false);
        setInputText(''); // This would reset any input field in a UI context
    }
};

// Example usage
handleSubmitText("Is LVY prefix out-of-network?");