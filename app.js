const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.send('its working....')
})
app.listen(4200,(req,res,next)=>{
    console.log('qwert');
})