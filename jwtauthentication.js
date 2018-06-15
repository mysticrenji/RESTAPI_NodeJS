const express = require('express');
const jwt = require('jsonwebtoken');

const app= express()

app.get('/api', (req,res)=>{
    res.json({
        message: 'Welcome to API Authentication Sample'
    });
});

app.listen(5000, ()=> console.log('Listening to port 5000'))