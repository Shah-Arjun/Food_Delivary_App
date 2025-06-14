const express = require("express");
const mongoDB = require("./db");

const app = express();
const port = 5000;

mongoDB(); // 👈 Make sure this is called

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});