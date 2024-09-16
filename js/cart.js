let cart = [];

// Function to add an item to the cart
function addToCart(id, name, price) {
    // Check if the item is already in the cart
    const item = cart.find(product => product.id === id);
    
    if (item) {
        // If item exists, increase the quantity
        item.quantity++;
    } else {
        // If not, add a new item
        cart.push({ id, name, price, quantity: 1 });
    }

    displayCart();
    displayCart2();
    displayCart3();
}

// Function to remove an item from the cart by its ID
function removeFromCart(id) {
    // Find the index of the item with the given ID
    const index = cart.findIndex(product => product.id === id);
    
    if (index !== -1) {
        cart[index].quantity--;

        // If the quantity reaches 0, remove the item from the cart
        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }
    }

    displayCart();
    displayCart2() ;
    displayCart3();
}

// Function to display the cart items and total price
function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const listItemCount = document.getElementById('nav-item-count');
    const itemCount = document.getElementById('item-count');
    
    // Clear the current cart display
    cartItemsElement.innerHTML = '';

    // Calculate total price
    let totalPrice = 0;

    // Loop through the cart and display each item
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2');
        listItem.textContent = `${product.name} (x${product.quantity}) - $${product.price * product.quantity}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('ml-4', 'text-red-500', 'hover:underline');
        removeButton.onclick = () => removeFromCart(product.id);

        listItem.appendChild(removeButton);
        cartItemsElement.appendChild(listItem);

        totalPrice += product.price * product.quantity;
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
    listItemCount.textContent =countTotalItems();
    itemCount.textContent = countTotalItems();
}



//Display cart to the nav cart icon

function displayCart2() {
    const cartItemsElement2 = document.getElementById('nav-cart-items');
    const totalPriceElement2 = document.getElementById('nav-total-price');
    
    
    // Clear the current cart display
    cartItemsElement2.innerHTML = '';

    // Calculate total price
    let totalPrice = 0;

    // Loop through the cart and display each item
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2');
        listItem.textContent = product.quantity + " Items";//product.price * product.quantity;//`${product.name} (x${product.quantity}) - $${product.price * product.quantity}`;
        
        // const removeButton = document.createElement('button');
        // removeButton.textContent = 'Remove';
        // removeButton.classList.add('ml-4', 'text-red-500', 'hover:underline');
        // removeButton.onclick = () => removeFromCart(product.id);

        // listItem.appendChild(removeButton);
        cartItemsElement2.appendChild(listItem);
        totalPrice +=product.price * product.quantity;

    });

    // Update the total price
    totalPriceElement2.textContent = totalPrice.toFixed(2);
}


function displayCart3() {
    const totalItemsElement = document.getElementById('nav-item-count');
    
    // Clear the current cart display
    cartItemsElement3.innerHTML = '';

    // Calculate total price
    let totalQuantity = 0;


    // Loop through the cart and display each item
    cart.forEach(product => {
        const listItemCount = document.getElementById('nav-item-count');
        //listItem.classList.add('mb-2');
        listItem.textContent = product.quantity ;//product.price * product.quantity;//`${product.name} (x${product.quantity}) - $${product.price * product.quantity}`;
        
        // const removeButton = document.createElement('button');
        // removeButton.textContent = 'Remove';
        // removeButton.classList.add('ml-4', 'text-red-500', 'hover:underline');
        // removeButton.onclick = () => removeFromCart(product.id);

        // listItem.appendChild(removeButton);
        cartItemsElement3.appendChild(listItem);




        //nav-item-count

        //const newDepositTotal = prevousDepositAmount+newDipositAmount;
        //displayDipositTotal.innerText = newDepositTotal;
    });

    


   
}

// Redirect to Cart Page



function countTotalItems() {
    let totalItems = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });
    return totalItems;
}




/*
let cart = [];

// Function to add an item to the cart
function addToCart(id, name, price) {
    // Check if the item is already in the cart
    const item = cart.find(product => product.id === id);
    
    if (item) {
        // If item exists, increase the quantity
        item.quantity++;
    } else {
        // If not, add a new item
        cart.push({ id, name, price, quantity: 1 });
    }

    displayCart();
    displayCart2();
    displayCart3();
}

// Function to remove an item from the cart by its ID
function removeFromCart(id) {
    // Find the index of the item with the given ID
    const index = cart.findIndex(product => product.id === id);
    
    if (index !== -1) {
        cart[index].quantity--;

        // If the quantity reaches 0, remove the item from the cart
        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }
    }

    displayCart();
    displayCart2() ;
    displayCart3();
}

// Function to display the cart items and total price
function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const listItemCount = document.getElementById('nav-item-count');
    const itemCount = document.getElementById('item-count');
    const cartItemsElement2 = document.getElementById('nav-cart-items');
    const totalPriceElement2 = document.getElementById('nav-total-price');
    
    // Clear the current cart display
    cartItemsElement.innerHTML = '';

    // Calculate total price
    let totalPrice = 0;

    // Loop through the cart and display each item
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2');
        listItem.textContent = `${product.name} (x${product.quantity}) - $${product.price * product.quantity}`;
        
        listItem2.textContent = `${product.name} (x${product.quantity}) - $${product.price * product.quantity}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('ml-4', 'text-red-500', 'hover:underline');
        removeButton.onclick = () => removeFromCart(product.id);

        listItem.appendChild(removeButton);
        cartItemsElement.appendChild(listItem);
        cartItemsElement2.appendChild(listItem2);

        totalPrice += product.price * product.quantity;
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
    listItemCount.textContent =countTotalItems();
    itemCount.textContent = countTotalItems();
    totalPriceElement2.textContent = totalPrice.toFixed(2);
}



function countTotalItems() {
    let totalItems = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });
    return totalItems;
}*/