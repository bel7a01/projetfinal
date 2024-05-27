const express = require("express");
const morgan = require("morgan");
const UserRouter = require("./routes/user")
const InfoRouter = require("./routes/info")
const commentsRouter = require("./routes/Commentroute")
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();

//definition des middlewares
app.use(express.json())
app.use(morgan("dev"));
app.use(cors("*"))


//defintion des routes
app.use("/users", UserRouter);
app.use("/info", InfoRouter);
app.use("/comments", commentsRouter);













connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://belgaiedbelhassen:OvV0PYmxIAlEYnCs@projet.vtfnjgz.mongodb.net/projet?retryWrites=true&w=majority&appName=projet')
        console.log("db connected")
    } catch (error) {
        console.log(error.message)
    }
};

app.listen(3000, () => {
    connectDb();
    console.log('Server is running on port 3000')
});
