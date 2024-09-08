const app = require("./final_middleware");

// Create a server
let port = 5000;
app.listen(port, () => {
  console.log("server has been started on port 5000");
});
