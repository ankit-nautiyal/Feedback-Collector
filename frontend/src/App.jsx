import { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import api from "./api.js";


function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Fetch feedbacks on mount
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await api.get("/feedbacks");
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };
    fetchFeedbacks();
  }, []);

  // Handle form submission
  const handleSubmit = async (feedback) => {
    try {
      const newFeedback = { ...feedback, timestamp: Date.now() };
      await api.post("/submit-feedback", newFeedback);

      // Fetch updated feedbacks after submission
      const response = await api.get("/feedbacks");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };



  return (
    
    <div className={`${theme === "light" ? "bg-gray-100" : "bg-gray-900"} min-h-screen flex flex-col items-center py-8`}>
      
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

      {showFeedback && <FeedbackList feedbacks={feedbacks} theme={theme} />}

      <footer className="mt-8 text-gray-500 bg-stone-200 w-screen text-center bottom-0 fixed">
        Made with ❤️ by Ankit Nautiyal
      </footer>
    </div>
    
  )
}

export default App;
