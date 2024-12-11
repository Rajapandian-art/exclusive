const cartItemsContainer = document.querySelector(".cart-items")

function DisplayCartItems(){
        const items = JSON.parse(localStorage.getItem("cart"));
           items.forEach(item => {
       
        const cartItem = document.createElement("div");
        cartItem.className = "cart_item";
        cartItem.innerHTML = `
          <p class="cart_id">${item.id}</p>
                    <p class="cart_title">${item.title}</p>
                    <img src="${item.image}" alt="${item.title}" class="cart_img"/>
                    <p class="cart_item_price">${item.price}</p>
                 <button class="removeBtn">Remove</button>               
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    }
    DisplayCartItems();

    document.querySelectorAll('.removeBtn').forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent cart item of the clicked button
            const cartItem = this.parentElement;
            
            // Remove the cart item from the DOM
            cartItem.remove();
        });
    });

  








