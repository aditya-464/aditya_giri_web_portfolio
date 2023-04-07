const express = require("express");
const router = express.Router();
const Client = require("../model/clientDetailsSchema");
const mongoose = require("mongoose");

// router.get("/", (req, res) => {
//     res.send("Hare Krishna!");
// })

router.post("/sendmessage", (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: "Fill all the fields!" });
        }

        const newClient = new Client({ name: name, email: email, message: message });
        newClient.save().then(() => {
            res.status(201).json({ message: "Client data added Successfully!" });
        }).catch((err) => {
            res.status(500).json({ error: "Client data adding Failed!" });
        })
    } catch (error) {
        console.log("Error occured while uploading data to database! ", error);
    }
})

module.exports = router;