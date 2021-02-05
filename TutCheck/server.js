const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require('./routes/routes');
app.use(bodyParser.urlencoded({ extended: false}));
app.set("view engine","ejs");
app.set("views","views");

app.use(express.static("public"));
app.use(router);

app.listen(8060,function(){
    console.log("Server lauscht auf http://localhost:8060");
})