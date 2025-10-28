const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('hello world, i am shivu from halehalli')
});
app.get('/products', (req, res)=>{
    res.json({message: 'this is an products get route', page:5})
});
app.post('/products', (req, res)=>{
     res.json({message:'this is an product post route'})
})
app.put('/products', (req, res)=>{
     res.json({message:'this is an product put route'})
})

app.get('/products/:id',(req, res)=>{

    console.log(req.params.id);
    
     res.json({message: 'this is single product route', product:req.params.id})
})

app.listen(5000, () => {
    console.log('server is running');
});