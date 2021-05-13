const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3007
const app = express();

app.use(logger("dev")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true, 
});

// routes
app.use(apiRoutes);
app.use(htmlRoutes);
//app.use(require('./routes/apiRoutes'));
//app.use(require('./routes/htmlRoutes'));

//start server
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT} `);
});