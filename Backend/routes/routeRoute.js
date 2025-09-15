const express = require("express");
const routeRouter = express.Router();

routeRouter.get("/", (req, res) => {
    res.json({ message: "Get all routes" });
});

routeRouter.get("/:id", (req, res) => {
    res.json({ message: `Get details of route ${req.params.id}` });
});

routeRouter.get("/:id/buses", (req, res) => {
    res.json({ message: `Get active buses on route ${req.params.id}` });
});

routeRouter.post("/", (req, res) => {
    res.json({ message: "Add new route" });
});

module.exports = routeRouter;
