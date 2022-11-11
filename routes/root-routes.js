const express = require("express");
const router = express.Router();

const welcomeMessg = {
  name: "Yosniel",
  company: "EIP-Studios",
  message: "welcome to my server",
  linkedin: "https://linkedin.com/in/ingenieríacubana",
  github: "https://github.com/ycabrera90",
};

router.get("/", (req, resp, next) => {
  resp.json(welcomeMessg);
});

module.exports = router;
