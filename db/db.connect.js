const mongoose = require("mongoose")
require("dotenv").config()

const mongooseUri = process.env.MONGODB

const initializeDatabase = async () => {
   await mongoose.connect(mongooseUri).then(() => {
        console.log("connected to database")
    }).catch((error) => console.log("Error connecting to database", error))
}

module.exports = {initializeDatabase}
