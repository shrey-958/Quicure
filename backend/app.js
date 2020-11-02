require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./routes/user.js");
const hospitalRouter = require("./routes/hospital.js");
const doctorRouter = require("./routes/doctor.js");
const cors = require('cors');
app.use(cors());



app.use("/api/users",express.json(),userRouter);
app.use("/api/hospital",express.json(),hospitalRouter);
app.use("/api/doctor",express.json(),doctorRouter);


app.listen(process.env.APP_PORT,() =>{
    console.log("Server up and listening on port : "+process.env.APP_PORT);
});
