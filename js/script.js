const display = document.querySelector(".display");
const button = document.querySelectorAll("button");
const popup = document.getElementById("popup");
const calc = document.querySelector("#calc");
const ac = document.getElementById("ac");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      display.value = eval(display.value);
    } else if (btn.id === "ac") {
      display.value = "";
      popup.classList.remove("active");
      display.classList.remove("active");
    } else if (btn.id === "del") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.id;
      popup.classList.toggle("active");
      display.classList.toggle("active");
      calc.classList.toggle("active");
    }
  });
});

button.forEach((btn) => {
  document.addEventListener("click", function (e) {
    if (
      (!popup.contains(e.target) && !calc.contains(e.target)) ||
      ac.contains(e.target)
    ) {
      popup.classList.remove("active");
      display.classList.remove("active");
      calc.classList.remove("active");
    } else {
      popup.classList.add("active");
      display.classList.add("active");
      calc.classList.add("active");
    }
  });
});
