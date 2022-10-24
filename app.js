require("./monguse");
const express = require("express");
const app = express();
const routerMongo = require("./routes/routerMongo");
const config = require("./config.js");
const cors = require("cors");
app.use(cors());

app.use(express.static("public"));
app.use("/", (req, resp, next) => {
   next();
});

app.use("/tienda", routerMongo);

app.use((err, req, resp, next) => {
   console.log("Error:" + err);
   next();
});

app.listen(config.PORT, config.HOST, () => {
   console.log("Servidor conectado en host:" + config.HOST + " y puerto: " + config.PORT);
});
