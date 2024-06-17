const mongoose = require("mongoose")
require('dotenv').config();


// const connectTomongo=()=>{
//     // mongoose.connect('mongodb+srv://chitreshcm:eN9GrUr4Q0FUYu59@cluster0.rzwbtp1.mongodb.net/newNote', { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("connected")
// }

const connectTomongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1); // Exit process with failure
    }
};

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
module.exports = connectTomongo;
