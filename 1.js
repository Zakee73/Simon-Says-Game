let gameSeq = [];
let userSeq = [];
let btns = ["brown", "skyblue", "orange", "burlywood"];


let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
   if (started == false) {
      console.log("Game Started");
      started = true;
   }

   levelup();
});

function levelup() {
   userSeq = [];
   level++;
   h3.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randbtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randbtn);
};

function checkAns(idx) {

   if (userSeq[idx] === gameSeq[idx]) {
      if (userSeq.length == gameSeq.length) {
         setTimeout(levelup, 1000);
      }
   } else {
      h3.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press Any Key To Start.`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
         document.querySelector("body").style.backgroundColor = "white";
      }, 150);
      reset();
   }
};

function reset() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}

function gameFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
      btn.classList.remove("flash");
   }, 250);

};

function userFlash(btn) {
   btn.classList.add("userflash");
   setTimeout(function () {
      btn.classList.remove("userflash");
   }, 250);

};

function btnPress() {
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");

for (btn of allBtn) {
   btn.addEventListener("click", btnPress);
}