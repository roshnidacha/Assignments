const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

let products = [
    { 
      name:'laptop',
      id:1,
      price:40000,
      category:'Digital',
      manufacturingDate:'2024-06-03',
      expDate:'2035-01-30'
    },
    { 
        name:'Mobile',
        id:2,
        price:15000,
        category:'Digital',
        manufacturingDate:'2024-11-05',
        expDate:'2028-06-30' 
    }
  ];
  

const adminCredentials = { username: 'admin', password: 'admin123' };
const userCredentials = { username: 'user', password: 'user123' };

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/admin_login', (req, res) => {
  res.render('admin_login');  
});

app.get('/user_login', (req, res) => {
  res.render('user_login');  
});

app.post('/admin_login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminCredentials.username && password === adminCredentials.password) {
    res.redirect('/registerProduct');  
  } else {
    res.send('Invalid credentials');  
  }
});

app.get('/registerProduct', (req, res) => {
    res.render('registerProduct',{products});  
});



app.post('/register', (req, res) => {
    const { name, price, category, manufacturingDate, expirationDate } = req.body;
  
    // Create a new product object
    const newProduct = {
      id: products.length + 1,  
      name,
      price,
      category,
      manufacturingDate,
      expirationDate
    };
  
    
    products.push(newProduct);
  
    
    res.redirect('/registerProduct');
  });

  
app.post('/user_login', (req, res) => {
    const { username, password } = req.body;
  
    if (username === userCredentials.username && password === userCredentials.password) {
      res.redirect('products');  
    } else {
      res.send('Invalid credentials');  
    }
});


app.get('/products', (req, res) => {
    res.render('productList', { products: [] });
  });
  
  app.get('/search', (req, res) => {
    const { name, category } = req.query;
  
    let filteredProducts = products;
  
    if (name) {
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    }
  
    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category.toLowerCase().includes(category.toLowerCase()));
    }
  
    res.render('productList', { products: filteredProducts });
  });
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
