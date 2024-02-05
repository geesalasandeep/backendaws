const express = require('express');
const app = express();
app.listen(4200,(req,res,next)=>{
    res.send('its working....')
})