const blockMenu = document.querySelector('.user-menu__shopping-cart');
const cart = blockMenu.querySelector('.shopping-cart');
const cartList = cart.querySelector('.shopping-cart__list');
const cartOpenedButton = blockMenu.querySelector('.user-menu__link');
const cartCount = blockMenu.querySelector('.user-menu__count');
const cartProductTemplate = document.querySelector('#shopping-cart-product').content;

const openCart = (event) => {
    event.preventDefault();

    if(!cartList.childElementCount) {
        return;
    }

    cart.classList.add('user-menu__cart_active');
};

const closeCart = (event) => {
    if(blockMenu.contains(event.target)) {
        return;
    }

    if(cart.classList.contains('user-menu__cart_active')) {
        event.preventDefault();
    }

    cart.classList.remove('user-menu__cart_active');
};

cartOpenedButton.addEventListener('click', openCart);

document.addEventListener('click', closeCart);

const removeProductFromCart = (productId) => {
    const node = cartList.querySelector(`[data-product-id="${productId}"]`);
    node.remove();
    cartCount.textContent = cartList.childElementCount;

    if(!cartList.childElementCount) {
        cart.classList.remove('user-menu__cart_active');
    }
};

const addProductToCart = (product) => {
    const node = cartProductTemplate.querySelector('.shopping-cart__item').cloneNode(true);

    node.dataset.productId = product.id;
    node.querySelector('.shopping-cart__link').href = product.link;
    node.querySelector('.shopping-cart__link img').src = product.image;
    node.querySelector('.shopping-cart__link p').textContent = product.name;
    node.querySelector('.shopping-cart__link span').textContent = `${product.price} ₽`;

    node.querySelector('.shopping-cart__delete').addEventListener('click', (event) => {
        removeProductFromCart(product.id);
        event.stopPropagation();
    });

    cartList.append(node);
    cartCount.textContent = cartList.childElementCount;
};

export { removeProductFromCart, addProductToCart };
