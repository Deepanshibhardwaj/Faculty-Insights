const express = require("express");
const app = express();
const connectToDB  = require('./connection/ConnectingDB');
const cors = require("cors");
const authRouter = require('./Routes/AuthRoute');
const InformationRouter = require('./Routes/InformationRoute');



// Some MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/auth',authRouter);
app.use('/information',InformationRouter);

const port = 8081;
app.get("/",(req,res) => {
    res.write("Welcome");
})

connectToDB();
app.listen(port , () => {
    console.log('listening on port ' + port)
})