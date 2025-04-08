import { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  
  const handleSubmit = async (feedback) => {
    const response = await fetch("/.netlify/functions/submit-feedback", {
      method: "POST",
      body: JSON.stringify(feedback),
    });
    if (response.ok) {
      const newFeedback = { ...feedback, timestamp: Date.now() };
      setFeedbacks([...feedbacks, newFeedback]);
    }
  };

  useEffect(() => {
    fetch("/.netlify/functions/get-feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    
    <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900"} flex flex-col items-center py-8`}>
      
      <button onClick={toggleTheme} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded absolute right-5 top-0">
              {theme === "light" ? <DarkModeIcon/> : <LightModeIcon/>} 
      </button>

      <FeedbackForm onSubmit={handleSubmit}  />

      <button
        onClick={() => setShowFeedback(!showFeedback)}
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
      >
        {showFeedback ? "Hide Feedback" : "View Submitted Feedback"}
      </button>

      {showFeedback && <FeedbackList feedbacks={feedbacks} />}

      <footer className="mt-8 text-gray-500 bg-stone-200 w-screen text-center bottom-0 fixed">
        Made with ❤️ by Ankit Nautiyal
      </footer>
    </div>
    
  )
}

export default App;
