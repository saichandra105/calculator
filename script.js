let display = document.getElementById("input");
let buttons = document.getElementsByClassName("button");

Array.from(buttons).forEach((b) => {
  b.addEventListener("click", (e) => {
    if (e.target.innerHTML == "C") {
      display.value = "";
    } else if (e.target.innerHTML == "⇚") {
      display.value = display.value.slice(0, -1);
    } else if (e.target.innerHTML == "=") {
      if (display.value.length !== 0) {
        display.value = eval(display.value);
      } else {
        display.value = "";
      }
    } else {
      display.value += e.target.innerHTML;
    }
  });
});
