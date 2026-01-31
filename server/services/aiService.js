const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateTripItinerary = async (destination, days, budget, preference) => {
    // Switch to gemini-1.5-flash for better performance/availability
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Generate a detailed ${days}-day trip itinerary for ${destination} with a budget of ${budget} (${preference}).
    Return ONLY a valid JSON object with the following structure, no markdown formatting:
    {
        "destination": "${destination}",
        "itinerary": [
            {
                "day": 1,
                "date": "Day 1",
                "activities": [
                    {
                        "time": "09:00 AM",
                        "title": "Activity Name",
                        "location": "Specific Location Name",
                        "notes": "Practical tip",
                        "cost": 0
                    }
                ]
            }
        ]
    }
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Gemini AI Failed (Using Fallback):", error.message);

        // --- FALLBACK MOCK DATA ---
        return {
            "destination": destination,
            "itinerary": [
                {
                    "day": 1,
                    "date": "Day 1",
                    "activities": [
                        {
                            "time": "10:00 AM",
                            "title": "Welcome to " + destination,
                            "location": "City Center",
                            "notes": "Arrival and Check-in (AI Service Unavailable, showing demo)",
                            "cost": 0
                        },
                        {
                            "time": "02:00 PM",
                            "title": "Local Sightseeing",
                            "location": "Main Attractions",
                            "notes": "Explore the famous landmarks.",
                            "cost": 50
                        }
                    ]
                },
                {
                    "day": 2,
                    "date": "Day 2",
                    "activities": [
                        {
                            "time": "09:00 AM",
                            "title": "Cultural Tour",
                            "location": "Historic Old Town",
                            "notes": "Guided walking tour.",
                            "cost": 30
                        },
                        {
                            "time": "07:00 PM",
                            "title": "Dinner & Nightlife",
                            "location": "Downtown",
                            "notes": "Enjoy local cuisine.",
                            "cost": 60
                        }
                    ]
                }
            ]
        };
    }
};

module.exports = { generateTripItinerary };
