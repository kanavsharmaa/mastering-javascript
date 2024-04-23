const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let value = document.querySelector(".value");

value.innerHTML = 0;

decrease.addEventListener("click", () => {
  value.innerHTML--;
});
reset.addEventListener("click", () => {
  value.innerHTML = 0;
});
increase.addEventListener("click", () => {
  value.innerHTML++;
});
