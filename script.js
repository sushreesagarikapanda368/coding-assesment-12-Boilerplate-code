document.addEventListener("DOMContentLoaded", function () {
    // JSON object with product data
    const cartData = [
      {
        productName: "Asgaard sofa",
        price: 250000,
        quantity: 1,
        image: "./Images/Asgaard sofa 5.png",
      },
      {
        productName: "Modern Chair",
        price: 50000,
        quantity: 2,
        image: "./Images/Asgaard sofa 5.png",
      },
    ];
  
    // Function to render cart items
    function renderCartItems() {
      const cartItemsDiv = document.getElementById("cart-items");
      let subtotal = 0;
  
      cartData.forEach((item) => {
        const itemSubtotal = item.price * item.quantity;
        subtotal += itemSubtotal;
  
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("row2-col-1-row-2");
        itemDiv.innerHTML = `
          <div><img src="${item.image}" alt="${item.productName}" /></div>
          <div style="color: #9F9F9F;">${item.productName}</div>
          <div class="Price-amount">Rs. ${item.price.toLocaleString()}</div>
          <div class="quantity-div">${item.quantity}</div>
          <div>Rs. ${itemSubtotal.toLocaleString()}</div>
          <div><img src="./Images/Vector.png" alt="Remove" /></div>
        `;
        cartItemsDiv.appendChild(itemDiv);
      });
  
      // Update subtotal and total
      document.getElementById("sub-total").innerText = `Rs. ${subtotal.toLocaleString()}`;
      document.getElementById("total-price").innerText = `Rs. ${subtotal.toLocaleString()}`;
    }
  
    // Call the function to render cart items
    renderCartItems();
  });
  
