const express = require("express");
const cors = require("cors")
require("./db/mongoose");
const posRouter = require("./routers/positive");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())


app.use("/positive", posRouter);

// // Is this just not needed?
// const server = http.createServer(app);
// server.listen(port);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

