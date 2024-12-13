import ollama from 'ollama'
export function initializeTextGeneration() {
  const chatMessages = document.querySelector('.chat-messages');
  const textarea = document.querySelector('textarea');
  const sendButton = document.querySelector('.send-button');
  const micButton = document.querySelector('.mic-button');
  let recognition;

  // Add welcome message when the chat initializes
  function addWelcomeMessage() {
    const welcomeMessages = [
      "👋 Hi there! I'm aMIGO, your friendly AI assistant!"
    ];

    welcomeMessages.forEach(text => {
      addMessage(text, false);
    });
  }

  if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      textarea.value = text;
    };
  }

  micButton.addEventListener('click', () => {
    if (recognition) {
      recognition.start();
      micButton.style.backgroundColor = 'red';
      setTimeout(() => {
        recognition.stop();
        micButton.style.backgroundColor = '';
      }, 5000);
    }
  });

  function addMessage(text, isUser) {
    const message = document.createElement('div');
    message.classList.add('message', isUser ? 'user' : 'bot');
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getCurrentUserInfo() {
    const moodResult = document.querySelector('.mood-result');
    const faceResult = document.querySelector('.face-result');
    
    let mood = moodResult?.textContent?.match(/Detected Mood: (.*)/)?.[1] || null;
    let name = faceResult?.textContent?.match(/Welcome back, (.*)!/)?.[1] || 
               faceResult?.textContent?.match(/Nice to meet you, (.*)!/)?.[1] || 
               'friend';

    return { mood, name };
  }

  sendButton.addEventListener('click', async () => {
    const text = textarea.value.trim();
    if (!text) return;

    addMessage(text, true);
    textarea.value = '';

    const isUser = false;
    const { mood, name } = getCurrentUserInfo();
    const message = document.createElement('div');
    message.classList.add('message', isUser ? 'user' : 'bot');
    message.textContent = '';
    chatMessages.appendChild(message);
    const final_msg = `
    Message: ${text}
    Mood: ${mood}
    Name:${name}
    `
    const messageTxt = { role: 'user', content: final_msg}
    const response = await ollama.chat({ model: 'amigo', messages: [messageTxt], stream: true })
    for await (const part of response) {
      // Append the part of the message to the div
      var outText = part.message.content;
      outText = outText.replace(/\n/g, '<br />'); 
      outText = outText.replace(/\n\n/g, '<br /><br />');
      message.innerHTML += outText;  // Adds the new text to the div
      message.scrollTop = message.scrollHeight; // Scrolls to the bottom
    }

    // const response = await generateResponse(text);
    // addMessage(response, false);
  });

  textarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendButton.click();
    }
  });

  // Show welcome message on initialization
  addWelcomeMessage();
}