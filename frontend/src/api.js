import axios from "axios";

const api = axios.create({
    baseURL: "/.netlify/functions", // Works for both local (netlify dev) and production
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;