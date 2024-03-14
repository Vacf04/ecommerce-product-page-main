export default function initModalImages() {
  const html = document.documentElement;
  const firstImage = document.querySelector(".first-image");
  const firstImageSlide = document.querySelector(".first-image-slide");
  const modal = document.querySelector(".modal-images");
  const closeModal = document.querySelector(".close-modal");
  const slideRightModal = document.querySelector(".slide-right");
  const slideLeftModal = document.querySelector(".slide-left");
  const slideRight = document.querySelector(
    "article .image-container .slide-right"
  );
  const slideLeft = document.querySelector(
    "article .image-container .slide-left"
  );
  firstImage.addEventListener("click", handleFirstImageClick);
  closeModal.addEventListener("click", handleCloseClick);
  slideRightModal.addEventListener("click", (e) => handleImageSlide(e, true));
  slideLeftModal.addEventListener("click", (e) => handleImageSlide(e, false));
  slideRight.addEventListener("click", (e) => handleImageSlide(e, true));
  slideLeft.addEventListener("click", (e) => handleImageSlide(e, false));

  function handleFirstImageClick() {
    modal.classList.add("active");
    html.style.overflow = "hidden";
  }

  function handleCloseClick() {
    modal.classList.remove("active");
    html.style.overflow = "auto";
  }

  function handleImageSlide(e, isRight) {
    e.preventDefault();
    const selectedImages = document.querySelectorAll(
      ".list-images-thumb .selected img"
    );
    selectedImages.forEach((selectedImage) => {
      const siblingElement = isRight
        ? selectedImage.parentElement.nextElementSibling
        : selectedImage.parentElement.previousElementSibling;

      const nextImageParentElement = siblingElement;
      if (nextImageParentElement === null) return;
      const nextImageSrc = nextImageParentElement.children[0].src;
      const nextImageSrcFormatted = nextImageSrc.slice(0, -14) + ".jpg";

      firstImage.setAttribute("src", nextImageSrcFormatted);
      firstImageSlide.setAttribute("src", nextImageSrcFormatted);

      selectedImage.parentElement.classList.remove("selected");

      nextImageParentElement.classList.add("selected");
    });
  }
}
