const words = document.querySelectorAll(".word");
console.log(words);

const letters = document.querySelectorAll(".letter");
console.log(letters);

letters.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    letter.classList.toggle("rubberband");
  });
  letter.addEventListener("mouseleave", () => {
    letter.classList.toggle("rubberband");
  });
});
