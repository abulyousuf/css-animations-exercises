// Make a box that doubles the height on click, and collapses when it's clicked again

const box = document.querySelector("#box");

box.addEventListener("click", () => {
    box.classList.toggle("double");
});