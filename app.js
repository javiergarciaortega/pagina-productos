document.addEventListener('DOMContentLoaded', function () {
    const cartToggle = document.querySelector('.cart');
    const productCounter = document.getElementById('product-counter');
    const total = document.getElementById('total');
    const emptyCartButton = document.getElementById('empty-cart');
    const cartList = document.getElementById('cart-list');
    const cartContainer = document.getElementById('cart-container');
    
    let productsInCart = [];
    let cartTotal = 0;

    // Función para actualizar el carrito en el DOM
    function updateCart() {
        cartList.innerHTML = '';
        cartTotal = 0;

        productsInCart.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price}`;
            cartList.appendChild(li);
            cartTotal += product.price;
        });

        total.textContent = `$${cartTotal.toFixed(2)}`;
        productCounter.textContent = productsInCart.length;

        // Almacenar el carrito en el LocalStorage
        localStorage.setItem('cartItems', JSON.stringify(productsInCart));
    }

    // Función para agregar productos al carrito
    function addToCart(name, price) {
        productsInCart.push({ name, price });
        updateCart();
    }

    // Función para vaciar el carrito
    function emptyCart() {
        productsInCart = [];
        updateCart();
    }

    // Evento para vaciar el carrito
    emptyCartButton.addEventListener('click', emptyCart);

    // Toggle para mostrar u ocultar el carrito
    cartToggle.addEventListener('click', function () {
        cartContainer.classList.toggle('hidden');
    });

    // Función para agregar productos al carrito desde el exterior
    window.agregarAlCarrito = function(name, price) {
        addToCart(name, price);
    };

    // Al cargar la página, verificar si hay elementos en el carrito en el LocalStorage y actualizar el carrito si es necesario
    window.addEventListener('load', function () {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems && storedCartItems.length > 0) {
            productsInCart = storedCartItems;
            updateCart();
        }
    });
});
