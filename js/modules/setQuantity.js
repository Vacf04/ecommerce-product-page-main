export default function initSetQuantity() {
  let quantity = 1;
  const quantityText = document.querySelector(".quantity-text");
  const quantityPlus = document.querySelector(".quantity-plus");
  const quantityMinus = document.querySelector(".quantity-minus");

  quantityPlus.addEventListener("click", handleClickPlus);
  quantityMinus.addEventListener("click", handleClickMinus);

  function handleClickPlus(e) {
    if (quantity >= 99) return;
    quantity++;
    quantityText.textContent = quantity;
  }

  function handleClickMinus(e) {
    if (quantity <= 1) return;
    quantity--;
    quantityText.textContent = quantity;
  }
}
