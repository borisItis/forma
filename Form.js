document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".form__button");
  let cartShown = true;
  let cartImage = false;

  submitButton.addEventListener("click", function () {
    if (cartShown) {
      cartImage = document.createElement("img");
      cartImage.src =
        "https://support.songtradr.com/hc/article_attachments/115010619108";
      cartImage.style.maxWidth = "20%";

      const form = document.querySelector("form");
      form.appendChild(cartImage);

      cartShown = false;
      submitButton.value = "Remove Image";
    } else {
      if (cartImage) {
        cartImage.remove();
        cartImage = true;
      }

      cartShown = true;
      submitButton.value = "submit";
    }
  });
});
