//
const express = require('express');
const app = express(); 
const restaurantRouter = require('./router/restaurant');

app.use('/api/restaurants', restaurantRouter);

app.get('/', (req, res) => {
    res.send('<H1>Hi JSD Express</H1>');
});

app.listen(3000, ()=> {
    console.log('Listening to port: 3000');
});