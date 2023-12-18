const express = require('express');
const app = express();
const morgan = require('morgan') ;
const bodyParser= require('body-parser');
const mongoose = require ('mongoose');

const WatchesRoutes = require('./API/routes/watchesMethods') ;
// const OrderRoutes = require('./API/routes/getOrders') ;
const mongo_pass=process.env.mongo_pass;
const mongo_username=process.env.mongo_username


mongoose.connect(`mongodb+srv://${mongo_username}:${mongo_pass}@cluster0.tb0kjcg.mongodb.net/?retryWrites=true&w=majority`);
// Serve images from the 'images' directory
// app.use('/seiko', express.static(this.path.join(__dirname, 'Photos')));

app.use(morgan('dev')); 

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header('Acces-Control-Allow-Origin', '*');

    res.header("Access-Control-Allow-Header", 'Origin,X-Requested-With , Content-Type, Accept , Authorization');
    if(req.method=== 'OPTIONS'){
        res.header('Access-Control-Allow-Method', 'PUT,POST,PATCH,DELETE,GET') ;
        res.status(200).json({}) ;
    }
    next();
});

app.use('/watches',WatchesRoutes);
// app.use('/orders',OrderRoutes);

app.use((error,req,res,next)=>
{
    res.status(error.status|| 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports=app ;
