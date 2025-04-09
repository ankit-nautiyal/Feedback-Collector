# Feedback Collector

A single-page full-stack application built to collect user feedback (name, email, and message) and display submitted entries in an admin view. This project demonstrates a clean, responsive frontend with a serverless backend and persistent database storage.

---

## Project Structure

```
Feedback-Collector/
├── backend/                  # Netlify Functions (backend)
│   ├── functions/           # Serverless function files
│   │   ├── feedbacks.js     # GET /feedbacks endpoint
│   │   └── submit-feedback.js # POST /submit-feedback endpoint
│   ├── node_modules/        # Backend dependencies
│   ├── package.json         # Backend dependency config
|   └── package-lock.json
├── frontend/                # React frontend
│   ├── src/                # Source files
│   │   ├── components/     # Reusable React components
│   │   │   ├── FeedbackForm.jsx    # Feedback submission form
│   │   │   └── FeedbackList.jsx    # Feedback display list
│   │   ├── api.js          # Axios instance for API calls
│   │   └── App.jsx         # Main app component
│   │   ├── main.jsx
│   │   └── index.css       # main css file
│   ├── public/             # Static assets
│   ├── node_modules/       # Frontend dependencies
│   ├── dist/ 
│   ├── package.json         # Frontend dependency config
|   └── package-lock.json
├── netlify.toml            # Netlify configuration
├── package.json            # Root dependency config
├── .gitignore              #gitignore file
├── package-lock.json
├── node_modules            # Root dependencies
└── README.md               # Project documentation
```

- **backend/**: Contains Netlify Functions for serverless API logic.
- **frontend/**: React app built with Vite, handling UI and API interactions.
- **netlify.toml**: Configures Netlify build and deployment settings.

---

## Tech Stack

- **Frontend**:
  - **React**: JavaScript library for building the UI.
  - **Vite**: Fast build tool and dev server.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **Axios**: HTTP client for API requests.
  - **Material-UI Icons**: Icons for theme toggle.

- **Backend**:
  - **Netlify Functions**: Serverless functions for API endpoints.
  - **Node.js**: Runtime for functions.
  - **Supabase**: Cloud-hosted PostgreSQL database for persistent storage.

- **Deployment**:
  - **Netlify**: Hosts both the static frontend and serverless backend.

---

## Features

- **Feedback Submission**: Users can submit their name, email, and message via a form.
- **Admin View**: Toggleable section to view all submitted feedback.
- **Responsive Design**: Works across mobile and desktop devices.
- **Theme Toggle**: Switch between light and dark modes.
- **Persistent Storage**: Feedback is stored in Supabase, accessible across sessions.

---

## Prerequisites

- **Node.js**: v16+ (for local development).
- **Netlify CLI**: For local testing and deployment (`npm install -g netlify-cli`).
- **Supabase Account**: For database setup (sign up at [supabase.com](https://supabase.com)).

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/ankit-nautiyal/Feedback-Collector.git
cd Feedback-Collector
```

### 2. Set Up Supabase
1. Create a new project in [Supabase](https://supabase.com).
2. In the SQL Editor, run:
   ```sql
   CREATE TABLE feedbacks (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     message TEXT NOT NULL,
     timestamp BIGINT NOT NULL
   );
   ```
3. Note your **Supabase URL** and **Anon Key** (Settings > API).

### 3. Configure Environment Variables
- Create a `.env` file in the root directory:
  ```
  SUPABASE_URL=https://your-project.supabase.co
  SUPABASE_ANON_KEY=your-anon-key
  ```
- Add `.env` to `.gitignore`:
  ```
  .env
  ```

### 4. Install Dependencies
- **Frontend**:
  ```bash
  cd frontend
  npm install
  ```
- **Backend**:
  ```bash
  cd ../backend
  npm install
  ```

### 5. Run Locally
```bash
netlify dev
```
- Open `http://localhost:8888` to test the app.

---

## Deployment Steps

### 1. Build the Frontend
```bash
cd frontend
npm run build
```

### 2. Deploy to Netlify
1. Install Netlify CLI (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```
2. Deploy:
   ```bash
   cd ..
   netlify deploy --prod
   ```
   - Point to `frontend/dist` when prompted (handled by `netlify.toml`).

3. Set Environment Variables in Netlify:
   - Go to Netlify Dashboard > Site Settings > Environment Variables.
   - Add:
     - `SUPABASE_URL`: `https://your-project.supabase.co`
     - `SUPABASE_ANON_KEY`: `your-anon-key`

4. Test the live URL (e.g., `https://your-site.netlify.app`).

---

### Push to GitHub
1. Initialize Git (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Feedback Collector app"
   ```
2. Create a GitHub repo (e.g., `Feedback-Collector`) and push:
   ```bash
   git remote add origin https://github.com/ankit-nautiyal/Feedback-Collector.git
   git branch -M main
   git push -u origin main
   ```
--- 

## Notes
- **Security**: Currently, the app has no authentication, making feedback publicly accessible. For production, add Supabase Row-Level Security (RLS) and user authentication.
- **Limitations**: Built under time constraints; enhancements like form validation and animations are minimal.

---

## Credits
Author: Ankit Nautiyal
Email: nautiyalankit65@gmail.com


