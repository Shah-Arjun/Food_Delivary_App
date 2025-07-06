const express = require("express");
const router = express.Router();


router.post('/foodData', (req, res) => {
    try {
        console.log([global.food_items, global.foodCategory]);
        res.send([global.food_items])
    } catch (error) {
        console.error(error.message);
        res.send("Server error");
    }
})


module.exports = router;