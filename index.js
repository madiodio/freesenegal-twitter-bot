const express = require("express");

require("./src/bot");

require("newrelic");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to Free Senegal Bot",
    link: "https://twitter.com/freesenegalbot",
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
