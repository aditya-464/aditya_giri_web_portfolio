const mongoose = require("mongoose");
const clientDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date : {
        type : Date,
        default : Date.now
    }
}, {
    collection : "myPortfolioCollection"
});
const Client = mongoose.model("Client", clientDetailsSchema);
module.exports = Client;