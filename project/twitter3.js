const express = require("express");

const app = express();

app.use(express.json());

const { submit1 } = require("./twitter2");

app.get("/", (req, res) => {
  res.json({
    message: "demo page",
  });
});

app.post("/adduser", async (req, res) => {
  const body = req.body;
  await submit1(body);
  res.json({
    message: "user is added",
  });
});

app.listen(5000, () => {
  console.log("server is running");
});
