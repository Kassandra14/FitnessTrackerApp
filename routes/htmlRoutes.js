//routes/htmlRoutes.js
const router = require("express").Router();
const path = require("path");

//route to home page check 
router.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    } catch (err) {
        res.status(500).json("server error");
    res.redirect('index.html');
    }
});

router.get("/exercise", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    } catch (err) {
        res.status(500).json("server error");
    res.redirect('exercise.html');
    }
});

router.get("/stats", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    } catch (err) {
        res.status(500).json("server error");
    res.redirect('stats.html');
    }
});

module.exports = router;
