const form = document.querySelector(".form");
const container = document.querySelector(".container");

// Создаем элемент
const img = document.createElement("img");
img.src = "https://support.songtradr.com/hc/article_attachments/115010619108";
img.alt = "Success image";
img.style.display = "none";
img.style.maxWidth = "100%";
img.style.marginTop = "20px";
img.style.borderRadius = "8px";
img.style.cursor = "pointer";

// Добавляем изображение в контейнер
container.appendChild(img);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    // Показываем изображение
    img.style.display = "block";

    form.reset();
    img.scrollIntoView({ behavior: "smooth" });
  }
});

img.addEventListener("click", function () {
  img.style.display = "none";
});
