export default function initTradeImages() {
  const listImagesSlide = document.querySelectorAll(
    ".list-images-slide li img"
  );
  const listImages = document.querySelectorAll(".list-images li img");

  listImagesSlide.forEach((image) => {
    image.addEventListener("click", () => transformInFirstImage(image));
  });

  listImages.forEach((image) => {
    image.addEventListener("click", () => transformInFirstImage(image));
  });

  function transformInFirstImage(image) {
    const firstImage = document.querySelector(".first-image");
    const firstImageSlide = document.querySelector(".first-image-slide");
    removeSelectedClass();
    const imageSrc = image.getAttribute("src");
    const selectedImages = document.querySelectorAll(`img[src="${imageSrc}"]`);
    selectedImages.forEach((image) => {
      image.parentElement.classList.add("selected");
    });
    const imageSrcFormatted = formatImageSource(image.src);
    firstImage.setAttribute("src", imageSrcFormatted);
    firstImageSlide.setAttribute("src", imageSrcFormatted);
  }

  function removeSelectedClass() {
    listImages.forEach((image) => {
      image.parentElement.classList.remove("selected");
    });

    listImagesSlide.forEach((image) => {
      image.parentElement.classList.remove("selected");
    });
  }

  function formatImageSource(src) {
    return src.slice(0, -14) + ".jpg";
  }
}
