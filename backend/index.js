const express = require("express");
const mongoDB = require("./db");

const app = express();
const port = 5000;

(async() => {
    await mongoDB(); // Ensures DB connects before server starts
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
})();