const router = require("express").Router();

const homeRoutes = require("./htmlRoutes");
const apiRoutes = require("./api");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;