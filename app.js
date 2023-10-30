import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();
const port = 8080;

app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`✅ Server listening on port http://localhost:${port}`);
});
