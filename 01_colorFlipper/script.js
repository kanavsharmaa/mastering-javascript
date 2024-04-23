const container = document.getElementById("container");
const heading = document.getElementById("heading");
const button = document.getElementById("click");

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

const createRandomBackground = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  return hexColor;
};

button.addEventListener("click", () => {
  const hexColor = createRandomBackground();
  console.log("HexColor", hexColor);
  container.style.background = hexColor;
  heading.innerHTML = "Background Color: " + hexColor;
});
