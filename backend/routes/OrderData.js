
// Import the 'express' module, which is used to create the server and handle routing
const express = require("express");

// Create a new router instance using Express Router.
// This allows we to create modular, mountable route handlers.
const router = express.Router();


//This line loads the Order model so we can interact with the "orders" collection in MongoDB using Mongoose.
const Order = require('../models/Orders')



router.post('/orderData', async (req, res) => {  // Define a POST route '/orderData' to receive and store user order data

    let data = req.body.order_data      // Extract the order data array from request body

    await data.splice(0, 0, { Order_date: req.body.order_date })     // Insert order date at the beginning of the array

    
    // Search for an existing order document with the user's email
    //if email not existing in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })
    console.log(eId)
    if (eId === null) {    // Case 1: If no previous orders exist for this user
        try {
            await Order.create({              // Create a new order document for this user
                email: req.body.email,
                order_data: [data]    // Nesting array of arrays
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }

    else {            // 🔁 Case 2: If user already has previous orders
        try {   
            // Update the existing document by appending new order data to order_data array
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            res.send("Server Error", error.message)
        }
    }
})



//fetch ordered data from db and display it.
router.post('/myorderData', async(req, res)=>{
    try {
        let myData = await Order.findOne({'email':req.body.email})
        res.json({orderData:myData})
    } catch (error) {
        res.send("Server Error", error.message)

    }
})


// Export this router so it can be used in your main server file
module.exports = router;