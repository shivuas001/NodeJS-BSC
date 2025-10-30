const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.json({message: 'this is an products get route', page:5})
});

app.get('/products',(req, res) => {
console.log(req.query.search);
const {search} = req.query

res.json({message:'this is an product get route query',
          productName: search})
});


app.post('/products',(req, res)=>{
    console.log(req.body);
    const { name, Processor, Price} = req.body;
    
    res.json({message:'this is an post product', name, Processor, Price,});
});


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