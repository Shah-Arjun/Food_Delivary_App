// Importing the Mongoose library for MongoDB interaction
const mongoose = require('mongoose')


//Mongoose provides many features, and one of them is the Schema class, which is used to define the structure of documents in a MongoDB collection.
const {Schema} = mongoose;
//or 
// const Schema = mongoose.Schema;



//After this line, you can directly use "Schema" to define a new schema, like:

const OrderSchema = new Schema({
    email:{
        type : String,
        required: true,
        unique: true
    },
    order_data:{
        type: Array,
        required:true
    }
})