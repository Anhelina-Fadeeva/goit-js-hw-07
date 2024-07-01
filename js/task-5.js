function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("span.color");

changeColor.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  bodyColor.textContent = randomColor;
  bodyColor.style.color = randomColor;
});