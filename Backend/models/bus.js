const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    busNumber:
    {
        type: String,
        required: true
    },
    route: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Route"
    },
    capacity: {
        type: Number,
        default: 50
    },
    operator: { type: String },
    status:
    {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
},
    { 
        timestamps: true 
    });

module.exports = mongoose.model("Bus", busSchema);
