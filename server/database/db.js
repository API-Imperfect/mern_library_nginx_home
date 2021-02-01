// require in mongoose
const mongoose = require("mongoose");

//create a database connection variable and export it
const connectToDB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
};

module.exports = connectToDB;
