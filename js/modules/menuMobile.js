export default function initMenuMobile() {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".primary-navigation");
  const html = document.documentElement;
  menuButton.addEventListener("click", handleMenuButtonClick);

  function handleMenuButtonClick() {
    if (menu.classList.contains("active")) {
      closeMenu();
      return;
    }
    menu.classList.toggle("active");
    menuButton.classList.toggle("active");
    if (menu.classList.contains("active")) html.style.overflow = "hidden";
    else html.style.overflow = "auto";
    setTimeout(() => {
      html.addEventListener("click", catchClickOutside);
    });
  }
  function catchClickOutside(e) {
    if (!e.target.closest(".primary-navigation")) {
      closeMenu();
      return;
    }
  }

  function closeMenu() {
    menu.classList.remove("active");
    menuButton.classList.remove("active");
    html.style.overflow = "auto";
    html.removeEventListener("click", catchClickOutside);
  }
}
