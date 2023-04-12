const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log("Connection with database is Successful!");
}).catch((err)=>{
    console.log("Connection with database Failed!", err);
})