const express = require('express');
const cors = require('cors');
const session = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const bodyParser = require("body-parser");
const productRouter = require('./routes/routeProducts');
const cartRouter = require('./routes/routeCarts');
const memberRouter = require('./routes/routesMember');

app.use(cors({
    origin: ["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true,
}));
app.use(express.json());
app.use(bodyParser.json({type:"application/json"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    key:"username",
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { 
        expires: 60*60*24,
    },
    resave: false 
}));

app.use('/api', productRouter);
app.use('/cart', cartRouter);
app.use('/member', memberRouter);


app.listen(8000, ()=>{
    console.log(`Server is running on port 8000`);
});