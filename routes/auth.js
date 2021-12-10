const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "index" });
});

router.get("/login", (req, res) => {
  res.json({ msg: "everything ok" });
});

router.get("/register", (req, res) => {
  res.json({ msg: "user created" });
});

module.exports = router;
