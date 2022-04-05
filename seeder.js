const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDB = require("./config/config")
const Pizza = require("./models/pizzaModel");
const Pizzas = require("./data/pizza-data");

// config dot env and mongo db conn file
dotenv.config();
connectDB();

// import data 
const importData = async  () => {
    try {
        await Pizza.deleteMany()
        const sampleData = Pizzas.map(pizza => {return {...pizza}})
        await Pizza.insertMany(sampleData);
        console.log("DATA IMPORTED".bgGreen.white);
        process.exit();
    } catch (error) {
        console.log(`${error}`.bgGreen.white) //bgGreen.white this are the colors in the terminal 
        process.exit(1)
    }
}


const dataDestroy = () => {};
if(process.argv[2] === "-d"){
dataDestroy()
}else {
    importData()
}