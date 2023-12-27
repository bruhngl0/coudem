const mongoose = require("mongoose")


async function connect(){
    
    try {
        const con = await mongoose.connect('mongodb+srv://adityashrm500:K6CFyMnStFMy8Etr@cluster0.muy90ml.mongodb.net/')
        console.log("connected to db")
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
}

module.exports = connect;