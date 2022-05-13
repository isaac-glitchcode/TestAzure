const express = require('express');
const app = express();
const PORT = 8000

app.listen(PORT,()=>{
    console.log('Server is up!');
});

app.get('/', (req, res) => {
    res.send('Hello World From Express!')
});

app.get('/home', (req, res)=>{
    res.send('<h1>HOME</h1>');
});
