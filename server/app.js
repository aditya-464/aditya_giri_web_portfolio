const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path : "./config.env"});
const PORT = process.env.PORT;
require("./db/connection");

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(201).send("Hare Krishna!");
})

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT : ${PORT}`);
})