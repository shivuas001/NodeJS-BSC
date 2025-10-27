const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('hello world, i am shivu from halehalli')
});
app.get('/products', (req, res)=>{
    res.send('hello this is products')
});

app.listen(5000, () => {
    console.log('server is running');
});