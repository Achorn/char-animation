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

async function showChapter() {
  btn.remove();
  await animateText("Chapter: 01", display);
  console.log("then");
  await sleep(2000);
  await animateText("Your Time", titleDisplay);
  await sleep(2000);
  let restartBtn = document.createElement("button");
  restartBtn.innerHTML = "Restart";
  restartBtn.addEventListener("click", () => {
    display.innerHTML = "";
    titleDisplay.innerHTML = "";
    restartBtn.remove();
    textContainer.prepend(btn);
  });
  textContainer.appendChild(restartBtn);
}

async function animateText(str, elem) {
  for (let i = 0; i < str.length; i++) {
    elem.innerHTML = elem.innerHTML + str.charAt(i);
    keySound = new Audio("assets/audio/key_sound.m4a");
    keySound.volume = 0.07;
    keySound.play();
    await sleep(92);
  }
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
var timeBetween = 100;
