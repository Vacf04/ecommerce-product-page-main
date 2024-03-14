export default function initCartModel() {
  if (JSON.parse(localStorage.getItem("products"))) loadCart();
  const cart = document.querySelector(".cart-li img");
  const html = document.querySelector("html");

  cart.addEventListener("click", handleCartClick);

  function handleCartClick() {
    if (JSON.parse(localStorage.getItem("products"))) loadCart();
    const cartLi = cart.parentElement;
    cartLi.classList.toggle("active");
    clickOutside(cartLi, ".cart-div");
  }

  function clickOutside(item, selector) {
    setTimeout(() => {
      html.addEventListener("click", handleOutsideClick);
    });

    function handleOutsideClick(event) {
      if (
        !event.target.closest(selector) &&
        !event.target.closest(".cart-li img") &&
        !event.target.closest(".cart-item .delete-from-cart")
      ) {
        item.classList.remove("active");
        html.removeEventListener("click", handleOutsideClick);
      }
    }
  }

  function loadCart() {
    const cartItens = JSON.parse(localStorage.getItem("products"));
    const cartContent = document.querySelector(".cart-content");
    const cartQuantitySymbol = document.querySelector(".cart-quantity-symbol");
    cartQuantitySymbol.classList.add("active");
    cartQuantitySymbol.textContent = cartItens[0].quantity;
    cartContent.innerHTML = `<div class="cart-item">
    <img src="./images/image-product-1-thumbnail.jpg" alt="" width="100" height="100" class="item-thumbnail"></img>
    <span>${cartItens[0].title}</span>
    <span class="cart-item-price">$${cartItens[0].price} x ${cartItens[0].quantity} <span class="cart-full-price">$${cartItens[0].fullPrice}</span></span>
    <img src="./images/icon-delete.svg" alt="" width="14" height="16" class="delete-from-cart"></img>
    <a class="checkout">Checkout</a>
    </div>`;

    const deleteFromCartButton = document.querySelector(".delete-from-cart");
    deleteFromCartButton.addEventListener("click", deleteFromCart);
  }

  function deleteFromCart(e) {
    const cartQuantitySymbol = document.querySelector(".cart-quantity-symbol");
    localStorage.removeItem("products");
    e.currentTarget.parentElement.remove();

    const cartContent = document.querySelector(".cart-content");
    if (cartContent.children.length < 1) {
      cartContent.textContent = "Your cart is empty.";
      cartQuantitySymbol.textContent = "";
      cartQuantitySymbol.classList.remove("active");
    }
  }
}
