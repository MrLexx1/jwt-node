const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://muhilman606:jgOEkoy95cJSxOYN@backend.sllgl.mongodb.net/jwt_db?retryWrites=true&w=majority&appName=backend",
  {
    serverSelectionTimeoutMS: 5000,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(`mongoDB conection error: ${err}`);
});

module.exports = mongoose;
