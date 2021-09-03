const mongoose = require("mongoose");

const mongoUrl = `mongodb+srv://${process.env.SESSION_DB_USERNAME}:${process.env.SESSION_DB_PASSWORD}@cluster0.bbsjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
      console.log(`MongoDB connected`);
  } catch (error) {
    console.log(error.message);
    process.exit(1); // error code
  }
};

module.exports = connectDB;
