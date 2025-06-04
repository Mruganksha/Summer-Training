//Express.js = it is a npm package
//it is a framework - framework is basic flow of the task
//it manages everything from receving the request and giving the response
 
const express = require('express');
const app = express();

//now we can create routes (basically a url after / or after domain)

//llike konta pun .get chya adhi 1st .use execute hoel always
//app.use(function(req, res, next)); this 3 things are complusory for .use
//1st method to get middle ware
app.use(function(req, res, next){
    console.log("middleware");
    next(); //now move it further to execute
}); //we can make any number of middleware 1st all of them will execute and then it will go to route

//2nd way
function logger(req, res, next) {
    console.log("middleware 2nd");
    next();
}

app.use(logger);

//app.get(Route, requestHandler)
app.get("/", function(req, res){
   res.send("Hello0 world");
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something went wrong'); //this will be displayed on frontend
});

app.get("/profile", function(req, res, next){
    return next(new Error('something broke')); //this will be seen on console
})

app.listen(3000)

//but when we run the server by node express.js we need to stop and restart the server again and again for minor changes 
//so to overcome it we install a package: npm i nodemon -g, and now run it by nodemon express.js

//Middleware:
//Middleware is software that acts as a bridge or interface between different software systems, applications, and databases
//like route chya adhi khitri excute krych asel tr middleware is used
//it will take client or details or request and then when it will go to route it will have idea of who has requested

//reuest and response handling
//frontend-backend-frontend(1st write url then go to backend make route and then comeback to frontend)

//ERROR HANDLING;

//there is a default error handler


/*
//Types of middleware
//1. Arrow function middleware
app.use((req, res, next) => {
    console.log("Arrow function middleware");
    next();
});
//2. Third-party middleware
const morgan = require('morgan');
app.use(morgan('dev'));
//3. Route-specific middleware
app.get('/about', (req, res, next) => {
    console.log("Middleware just for /about");
    next();
}, (req, res) => {
    res.send("About Page");
});
*/