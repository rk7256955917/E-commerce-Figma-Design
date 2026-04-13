
const buttons = document.querySelectorAll(".size-buttons button");

buttons.forEach(button => {
button.addEventListener("click", () => {

buttons.forEach(btn => btn.classList.remove("box"));

button.classList.add("box");

});
});
