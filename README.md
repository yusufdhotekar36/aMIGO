# aMIGO (AI Virtual Companion)

![AI Virtual Companion](https://img.shields.io/badge/AI-Virtual%20Companion-blue?style=for-the-badge&logo=ai)
![Node.js](https://img.shields.io/badge/Node.js-v16+-green?style=for-the-badge&logo=node.js)
![npm](https://img.shields.io/badge/npm-v7+-red?style=for-the-badge&logo=npm)

### 🌟 **Welcome to AI Virtual Companion!**
An AI-powered application that recognizes the user's face, detects their mood, and interacts based on their emotions. This project is designed to enhance user interaction through mood-aware responses.

---

## 🚀 Features

- **Facial Recognition**: Identifies the user's face securely.
- **Mood Detection**: Detects the user’s mood (happy, sad, neutral, etc.).
- **Dynamic Responses**: Provides context-aware and mood-appropriate responses.
- **Real-Time Interaction**: Fast and responsive AI conversation.

---

## 🛠️ Requirements

Make sure the following are installed before running the application:

- **Ollama** (for AI integration)
- **Llama 3.2** (for model compatibility)
- **Node.js** (v16 or higher)

---

## 📥 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saaadshk/amigo
   cd amigo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure **Ollama** and **Llama 3.2** are installed on your system.

   - [Install Ollama](https://ollama.com/install-guide)
   - [Install Llama 3.2](https://llama.ai/documentation)

4. After installing **Llama 3.2**, create a new file named `amigo`:

   ```bash
   nano amigo
   ```

   Paste the following content into the file:

   ```
   FROM llama3.2
   PARAMETER temperature 1
   SYSTEM Your name is aMIGO and you are a virtual companion designed to be a trusted friend and empathetic listener. You provide friendly and engaging conversations, offering understanding and support to those seeking companionship or emotional guidance and you can give any type of information till August 2023. You are trained using 3 billion parameters by Saad Shaikh, Usaid Shaikh, Rehan Shaikh, Aurangzeb Shaikh and Yusuf Dhotekar as a major project in Vishwakarma University.
   ```

   To save and exit the file in Nano:
   - Press `CTRL + O`, then hit `Enter` to save.
   - Press `CTRL + X` to exit.

   You can also modify this text according to your preferences.

5. Create the customized amigo model:

   ```bash
   ollama create amigo -f amigo
   ```

---

## 💻 Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

3. Allow camera permissions to enable facial recognition and mood detection.

---

## 🤖 How It Works

1. **Face Recognition**: Uses a pre-trained model to recognize the user's face.
2. **Mood Detection**: Analyzes facial expressions to detect mood.
3. **Dynamic Response**: Responds based on detected emotions using the Llama AI model.

---

## 👨‍💻 Contributors

This project was developed as a final year project by:

- [Saad Shaikh](https://github.com/saaadshk)
- [Usaid Shaikh](https://github.com/usaid-shaikh)
- [Rehan Shaikh](https://github.com/rehan-shaikh)
- [Aurangzeb Shaikh](https://github.com/aurangzeb-shaikh)
- [Yusuf Dhotekar](https://github.com/yusuf-dhotekar)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Fork this repository
- Create a new branch
- Submit a pull request

---

## 🌐 Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-YourUsername-black?style=for-the-badge&logo=github)](https://github.com/saadshk)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-YourName-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/saad-shaikh-b23089214)

---

Made with ❤️ by **Your Name**
