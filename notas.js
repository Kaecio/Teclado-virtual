const cs2 = document.querySelector(".cs2");

const a = cs2.addEventListener("mousedown", () => {
  let audio = new Audio("audio/c2.mp3");
  console.log("chama");
  audio.play();
});

module.exports = { a };
