function BakeryItem(name, price, weight) {
    this.name = name;
    this.price = price;
    this.weight = weight;
  }
  
  
  function Cart() {
    this.items = [];
    this.totalPrice = 0;
  
 
    this.addItem = function(item) {
      this.items.push(item);
      this.totalPrice += item.price;
      this.updateCart();
    };
  
  
    this.updateCart = function() {
     
      const cartItemsContainer = document.getElementById("cart-items");
      cartItemsContainer.innerHTML = ""; 
  
      this.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(li);
      });
  
      
      document.getElementById("total-price").textContent = this.totalPrice.toFixed(2);
    };
  }
  
  
  const cart = new Cart();
  
 
  const itemsData = [
    new BakeryItem("Chocolate Cake", 15.99, "500g"),
    new BakeryItem("Strawberry Pastry", 5.99, "200g"),
    new BakeryItem("Croissant", 2.99, "100g"),
    new BakeryItem("Lemon Tart", 7.49, "300g"),
    new BakeryItem("Apple Pie", 8.99, "400g")
  ];
  
 
  function renderItems() {
    const itemsContainer = document.getElementById("items");
  
    itemsData.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
  
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <p>Weight: ${item.weight}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      
      itemsContainer.appendChild(itemDiv);
    });
  }
  
  
  function addToCart(itemIndex) {
    const item = itemsData[itemIndex];
    cart.addItem(item);
  }
  
  
  renderItems();
  