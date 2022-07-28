const mongoose = require('mongoose');

const connectDB = async () => {

  try {
    await mongoose
      .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // dbName: process.env.DB_NAME
      })
    console.log("DB connected succesfully")
  } catch (error) {
    console.log(`could not connect to the DB: ${error.message}`)
    console.log(error.message)
  }
}

module.exports = connectDB;