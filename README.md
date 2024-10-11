# AI Counseling App - README

## Overview

This is a React-based chatbot interface that allows users to select a specific persona (athletes in this case) and engage in conversation. The chatbot responses are powered by the OpenAI API, providing dynamic, contextually relevant replies based on the selected persona. The app features a clean UI with a chat panel, a sidebar for additional persona information, and backend integration for handling the OpenAI API interactions.

## Features

- Select athlete personas and chat with a chatbot emulating that persona.
- Real-time user-to-bot conversations.
- Athlete details and metrics displayed in the sidebar.
- Responsive design.
- Backend API integration to handle OpenAI API requests and responses.

## Technologies Used

- **Frontend:** Next js
- **Backend:** Next.js
- **API Integration:** OpenAI API (GPT-3.5-turbo)
- **HTTP Client:** Axios
- **State Management:** React Context API
- **Environment Variables:** .env.local (For OpenAI API key)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>= 14.x.x)
- npm or yarn

You will also need an OpenAI API key, which you can obtain by signing up at [OpenAI](https://beta.openai.com/signup/).

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/sbh-meiji-ai-counseling.git
cd sbh-meiji-ai-counseling
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root of your project to store your OpenAI API key:

```bash
NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key-here
```

### 3. Run the Application

```bash
npm run dev
```
