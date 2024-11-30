const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
let products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is the first product.',
    price: 10.99,
    available: true
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is the second product.',
    price: 20.99,
    available: true
  }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

    app.post('/admin/products', (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).send('Missing product details');
    }

    const newProduct = {
        id: String(products.length + 1), 
        name,
        description,
        price,
        available: true 
    };
    products.push(newProduct);
    res.status(201).json(newProduct); 
    });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
