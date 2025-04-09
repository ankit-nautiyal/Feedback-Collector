export default function FeedbackList({ feedbacks, theme }) {
    console.log("Current theme:", theme);

    return (
        <div className="w-full max-w-md mt-6">
            <h2 className={`${theme === "light" ? "text-black" : "text-white"} text-2xl font-semibold mb-4 text-center`}>Submitted Feedback</h2>

            {feedbacks.length === 0 ? (
            <p className="text-gray-500">No feedback yet.</p>
            ) : (
            // <ul className="space-y-4">
            //     {feedbacks.map((feedback, index) => (
            //     <li key={index} className="p-4 bg-white rounded-lg shadow-md">
            //         <p><strong>Name:</strong> {feedback.name}</p>
            //         <p><strong>Email:</strong> {feedback.email}</p>
            //         <p><strong>Message:</strong> {feedback.message}</p>
            //         <p className="text-sm text-gray-500">
            //             <strong>Submitted at:</strong> {new Date(feedback.timestamp).toLocaleString()}
            //         </p>
            //     </li>
            //     ))}
            // </ul>

            <p>test</p>
            )}

        </div>
    );
}

