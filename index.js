const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

app.use(
  cors({
    origin: true, // allow all origins dynamically
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", require("./routes/user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
