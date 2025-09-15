const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    points: { type: Number, default: 0 },
    travelHistory: [
        {
            route: { type: mongoose.Schema.Types.ObjectId, ref: "Route" },
            date: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
