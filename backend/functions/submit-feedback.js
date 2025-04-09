const feedbacks = [];

module.exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { name, email, message } = JSON.parse(event.body);
    const feedback = { name, email, message, timestamp: Date.now() };
    feedbacks.push(feedback);
    
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Feedback submitted" }),
    };
}