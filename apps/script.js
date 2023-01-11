const changeBlue = document.querySelector("#changeBlue");
const randomColor = document.querySelector("#randomColor");
const normal = document.querySelector("#normal");
const manual = document.querySelector("#manual");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const valueSlider = document.querySelector("#valueSlider");

changeBlue.addEventListener("click", () => {
  document.body.classList.toggle("blue");
  if (document.body.classList.contains("blue")) {
    changeBlue.innerHTML = "Change Red";
  } else {
    changeBlue.innerHTML = "Change Blue";
  }
});

let random = () => {
  return Math.floor(Math.random() * 255 + 1);
};

randomColor.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
});

normal.addEventListener("input", () => {
  document.body.style.backgroundColor = normal.value;
});

manual.addEventListener("input", () => {
  document.body.style.backgroundColor = manual.value;
});

red.max = "255";
green.max = "255";
blue.max = "255";

red.addEventListener("input", () => {
  document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  valueSlider.innerHTML = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});

green.addEventListener("input", () => {
  document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  valueSlider.innerHTML = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});

blue.addEventListener("input", () => {
  document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  valueSlider.innerHTML = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});
