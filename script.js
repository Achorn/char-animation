let display = document.getElementById("chapterDisplay");
let titleDisplay = document.getElementById("titleDisplay");
let textContainer = document.getElementById("textContainer");
// function addText(text){
//   console.log(' called')
//   console.log(display.innerHTML)
//   display.innerHTML = '';
//   for(let i = 0; i < text.length; i++){
//     display.innerHTML = display.innerHTML + text[i];
//     setTimeout(()=>{}, 1000)
//   }
// }
let btn = document.getElementById("btn");
btn.addEventListener("click", showChapter);
let keySound = new Audio("assets/audio/key_sound.m4a");
keySound.preload;
keySound.volume = 0.07;

async function showChapter() {
  btn.remove();
  await animateText("Chapter: 01", display, 110);
  await sleep(2000);
  await animateText("Your Time", titleDisplay, 150);
  await sleep(2000);
  let restartBtn = document.createElement("button");
  restartBtn.innerHTML = "RESTART";
  restartBtn.addEventListener("click", () => {
    display.innerHTML = "";
    titleDisplay.innerHTML = "";
    restartBtn.remove();
    textContainer.prepend(btn);
  });
  textContainer.appendChild(restartBtn);
}

async function animateText(str, elem, delay) {
  for (let i = 0; i < str.length; i++) {
    var keyClone = keySound.cloneNode();
    keyClone.play();
    elem.innerHTML = elem.innerHTML + str.charAt(i);
    await sleep(delay);
  }
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
