const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 
const routes = require("./routes");

const PORT = process.env.PORT || 3007
const app = express();

app.use(logger("dev")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
// routes
// app.use(require('./routes/apiRoutes'));
// app.use(require('./routes/htmlRoutes'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //dont know what this is
    useCreateIndex: true, 
});



//start server
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT} `);
});