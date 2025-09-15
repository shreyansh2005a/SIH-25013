const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
    name: { type: String,
         required: true },
    startPoint: { type: String, required: true },
    endPoint: { type: String, required: true },
    stops: [
        {
            name: { type: String },
            latitude: { type: Number },
            longitude: { type: Number }
        }
    ],
    distance: { type: Number }, 
    estimatedTime: { type: Number } 
}, { timestamps: true });

module.exports = mongoose.model("Route", routeSchema);
