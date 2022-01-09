const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { getMessage, addMessage, deleteAll } = require("./user");

app.get("/", (req, res) => {
  res.json({
    message: "this is a demo home page",
  });
});

app.get("/message", async (req, res) => {
  const list = await getMessage();
  res.json(list);
});

app.get("/delete", async (req, res) => {
  await deleteAll();
  res.json({
    message: "all records deleted successfully",
  });
});

app.post("/addmessage", async (req, res) => {
  console.log(req.body);
  const body = req.body;
  await addMessage(body);
  res.json({ message: "user added successfully" });
});

app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
