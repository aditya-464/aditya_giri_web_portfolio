const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path : "./config.env"});
const PORT = process.env.PORT;
require("./db/connection");

app.use(express.json());
app.use(require("./router/api"));

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT : ${PORT}`);
})