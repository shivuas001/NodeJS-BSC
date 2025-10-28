const express = require('express');

const app = express();

app.get('/products',(req, res) => {
console.log(req.query.search);
const {search} = req.query

res.json({message:'this is an product get route query',
          productName: search})
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

    const {id} = req.params
    
     res.json({message: 'this is single product route', product:id})
})

app.listen(5000, () => {
    console.log('server is running');
});