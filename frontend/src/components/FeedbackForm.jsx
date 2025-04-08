import { useState } from "react";


export default function FeedbackForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError("All fields are required!");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email address!");
            return;
        }

        setLoading(true);
        setError("");
        await onSubmit({ name, email, message });
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">

            
                <h2 className="text-2xl font-semibold mb-4 text-center">Submit Feedback</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="mb-4">
                    <label className="block text-gray-700">Full Name</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    disabled={loading}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        disabled={loading}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Feedback</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="4"
                        disabled={loading}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}