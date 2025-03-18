const express = require("express");
const fileRoutes = require("./routes/fileRoutes");

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON
app.use("/api/files", fileRoutes); // Use file routes

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
