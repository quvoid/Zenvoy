const mongoose = require('mongoose');

const tripSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        destination: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        travelers: {
            type: Number,
            required: true
        },
        budget: {
            type: Number,
            required: true
        },
        preference: {
            type: String,
            enum: ['cheapest', 'fastest', 'balanced'],
            default: 'balanced'
        },
        itinerary: [
            {
                day: Number,
                date: String,
                activities: [
                    {
                        time: String,
                        title: String,
                        location: String,
                        notes: String,
                        cost: Number
                    }
                ]
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Trip', tripSchema);
