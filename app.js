const compression = require("compression"),
  express = require("express"),
  app = express();

// all environments
app.use(compression()); //Compress all routes
app.use(express.static("views"));

console.log("production:\t\t", process.env.NODE_ENV === "production");

app.use("/", (req, res) => {
  res.sendFile("index.html", { root: "./views" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: \t ${port}`));