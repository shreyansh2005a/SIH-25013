const express = require('express');
const cors = require('cors');
const app = express();


const busRoutes = require("./routes/busRoute");
const routeRoutes = require("./routes/routeRoute");
const userRoutes = require("./routes/userRoute");

app.use("/api/buses", busRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/users", userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})