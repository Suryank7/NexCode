# AI Developer Co-Pilot

An AI-powered developer co-pilot that converts natural language instructions into production-ready code.

## 🚀 Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Editor**: Monaco Editor (VS Code-like)
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Architecture**: MVC, RESTful API
- **AI Integration**: Mocked GPT Service (Ready for OpenAI API)

## 🛠️ Setup & Installation

1. **Clone the repository** (if applicable)

2. **Backend Setup**
   ```bash
   cd server
   npm install
   npm start
   ```
   Server runs on `http://localhost:3000`.

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm run dev
   ```
   Client runs on `http://localhost:5173`.

## 🧩 Features

- **Natural Language to Code**: Type what you need (e.g., "Create a React Counter"), and get code instantly.
- **Code Explanation**: Get line-by-line explanations of generated code.
- **Modern UI**: Dark mode, Monaco Editor, and responsive design.

## 📂 Architecture

- **/client**: React frontend application.
  - `/src/components`: UI components (Chat, Editor).
  - `/src/services`: API connectors.
- **/server**: Node.js backend.
  - `/controllers`: Request handling logic.
  - `/services`: AI processing logic.

## 🔮 Future Scope

- Real GitHub Copilot Integration.
- Voice-based input.
- Database integration for saving snippets.
