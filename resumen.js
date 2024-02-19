document.addEventListener('DOMContentLoaded', function () {
    const cartItemsElement = document.getElementById('cart-items');

    // Recuperar los datos del carrito del LocalStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));

    // Verificar si hay elementos en el carrito
    if (storedCartItems && storedCartItems.length > 0) {
        // Iterar sobre los elementos del carrito y mostrarlos en el DOM
        storedCartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsElement.appendChild(li);
        });
    } else {
        // Si no hay elementos en el carrito, mostrar un mensaje indicando que está vacío
        const li = document.createElement('li');
        li.textContent = 'El carrito está vacío';
        cartItemsElement.appendChild(li);
    }
});
