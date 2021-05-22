// teclas brancas
const teclas_brancas = document.querySelectorAll(".branca");
// teclas pretas
const teclas_pretas = document.querySelectorAll(".preta");
// botão de power
const btn_power = document.querySelector(".circle_esq1");
console.log(btn_power);
//botão acender
const luz_liga = document.querySelector(".circle_power");

const c2 = document.querySelector(".c2");
const cs2 = document.querySelector(".cs2");
const d2 = document.querySelector(".d2");
const ds2 = document.querySelector(".ds2");
const e2 = document.querySelector(".e2");
const f2 = document.querySelector(".f2");
const fs2 = document.querySelector(".fs2");
const g2 = document.querySelector(".g2");
const gs2 = document.querySelector(".gs2");
const a2 = document.querySelector(".a2");
const as2 = document.querySelector(".as2");
const b2 = document.querySelector(".b2");

const c3 = document.querySelector(".c3");
const cs3 = document.querySelector(".cs3");
const d3 = document.querySelector(".d3");
const ds3 = document.querySelector(".ds3");
const e3 = document.querySelector(".e3");
const f3 = document.querySelector(".f3");
const fs3 = document.querySelector(".fs3");
const g3 = document.querySelector(".g3");
const gs3 = document.querySelector(".gs3");
const a3 = document.querySelector(".a3");
const as3 = document.querySelector(".as3");
const b3 = document.querySelector(".b3");

const c4 = document.querySelector(".c4");
const cs4 = document.querySelector(".cs4");
const d4 = document.querySelector(".d4");
const ds4 = document.querySelector(".ds4");
const e4 = document.querySelector(".e4");
const f4 = document.querySelector(".f4");
const fs4 = document.querySelector(".f2");
const g4 = document.querySelector(".g4");
const gs4 = document.querySelector(".gs4");
const a4 = document.querySelector(".a4");
const as4 = document.querySelector(".as4");
const b4 = document.querySelector(".b4");

const c5 = document.querySelector(".c5");
const cs5 = document.querySelector(".cs5");
const d5 = document.querySelector(".d5");
const ds5 = document.querySelector(".ds5");
const e5 = document.querySelector(".e5");
const f5 = document.querySelector(".f5");
const fs5 = document.querySelector(".f2");
const g5 = document.querySelector(".g5");
const gs5 = document.querySelector(".gs5");
const a5 = document.querySelector(".a5");
const as5 = document.querySelector(".as5");
const b5 = document.querySelector(".b5");

const c6 = document.querySelector(".c6");
const cs6 = document.querySelector(".cs6");
const d6 = document.querySelector(".d6");
const ds6 = document.querySelector(".ds6");
const e = document.querySelector(".e6");
const f6 = document.querySelector(".f6");
const fs6 = document.querySelector(".f2");
const g6 = document.querySelector(".g6");
const gs6 = document.querySelector(".gs6");
const a6 = document.querySelector(".a6");
const as6 = document.querySelector(".as6");
const b6 = document.querySelector(".b6");

let valor = false;
let audio = new Audio();

btn_power.addEventListener("click", () => {
  console.log("ligou");
  if (!valor) {
    eventBnt(c2, "audio/c2.mp3");
    eventBnt(cs2, "audio/cs2.mp3");
    eventBnt(d2, "audio/d2.mp3");
    eventBnt(ds2, "audio/ds2.mp3");
    eventBnt(e2, "audio/e2.mp3");
    eventBnt(f2, "audio/f2.mp3");
    eventBnt(fs2, "audio/fs2.mp3");
    eventBnt(g2, "audio/g2.mp3");
    eventBnt(gs2, "audio/gs2.mp3");
    eventBnt(a2, "audio/b2.mp3");
    eventBnt(as2, "audio/as2.mp3");
    eventBnt(b2, "audio/b2.mp3");

    eventBnt(c3, "audio/c3.mp3");
    eventBnt(cs3, "audio/cs3.mp3");
    eventBnt(d3, "audio/d3.mp3");
    eventBnt(ds3, "audio/ds3.mp3");
    eventBnt(e3, "audio/e3.mp3");
    eventBnt(f3, "audio/f3.mp3");
    eventBnt(fs3, "audio/fs3.mp3");
    eventBnt(g3, "audio/g3.mp3");
    eventBnt(gs3, "audio/gs3.mp3");
    eventBnt(a3, "audio/b3.mp3");
    eventBnt(as3, "audio/as3.mp3");
    eventBnt(b3, "audio/b3.mp3");

    luz_liga.style.backgroundColor = "red";
    luz_liga.style.boxShadow = " 1px 1px 10px 1px red, 1px 1px 30px 1px red";
    luz_liga.style.border = " 1px solid red";
    valor = true;
  } else {
    audio.pause();
    luz_liga.style.backgroundColor = "black";
    luz_liga.style.boxShadow = "";
    luz_liga.style.border = "1px solid black";
    valor = false;
  }
});

// tocar audio
function eventBnt(tecla, mp3) {
  tecla.addEventListener("mousedown", () => {
    let audio = new Audio(mp3);
    audio.play();
    if (valor === false) {
      audio.pause();
      console.log("parou tudo");
    }
  });
}

function desmarcar(tecla) {
  if (teclas_brancas) {
    tecla.classList.remove("selecionada_branca");
  }
  if (teclas_pretas) {
    tecla.classList.remove("selecionada_preta");
  }
}

teclas_brancas.forEach((tecla) => {
  tecla.onmousedown = () => {
    tecla.classList.add("selecionada_branca");
  };

  tecla.onmouseup = () => desmarcar(tecla);

  tecla.onmouseleave = () => desmarcar(tecla);
});

teclas_pretas.forEach((tecla) => {
  tecla.onmousedown = () => {
    tecla.classList.add("selecionada_preta");
  };

  tecla.onmouseup = () => desmarcar(tecla);

  tecla.onmouseleave = () => desmarcar(tecla);
});
