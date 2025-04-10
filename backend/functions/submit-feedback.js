const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { name, email, message, timestamp } = JSON.parse(event.body);
        const { error } = await supabase
            .from("feedbacks")
            .insert([{ name, email, message, timestamp }]);

        if (error) throw error;

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Feedback submitted" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};