export default function initAddToCart() {
  const cartAddButton = document.querySelector(".cart-add .button");
  const cartQuantity = document.querySelector(".cart-quantity .quantity-text");
  const cartQuantitySymbol = document.querySelector(".cart-quantity-symbol");
  const popUp = document.querySelector(".pop-up");
  cartAddButton.addEventListener("click", handleClick);
  function handleClick(e) {
    e.preventDefault();
    const quantity = +cartQuantity.textContent;
    if (quantity < 1) return;
    const productDates = {
      title: "Fall Limited Edition Sneakers",
      quantity: quantity,
      price: 125.0,
      fullPrice: 125 * quantity,
    };
    localStorage.setItem("products", JSON.stringify([productDates]));
    cartQuantitySymbol.textContent = quantity;
    cartQuantitySymbol.classList.add("active");
    popUp.textContent = "Product added to cart.";
    popUp.classList.add("active");
    setTimeout(() => {
      popUp.classList.remove("active");
    }, 800);
  }
}
