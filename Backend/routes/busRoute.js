const express = require("express");
const Busrouter = express.Router();

Busrouter.get("/", (req, res) => {
    res.json({ message: "Get all buses " });
});
Busrouter.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({ message: `Get details of bus ${id} ` });
});

Busrouter.get("/:id/location", (req, res) => {
    res.json({ message: `Live location of bus ${req.params.id} ` });
});

Busrouter.post("/", (req, res) => {
    res.json({ message: "Add new bus " });
});

module.exports = Busrouter;
