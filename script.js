// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const yesContinue = document.querySelector(".yes-btn-continue");


const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const page1 = document.getElementById("page1");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const openBtn = document.querySelector(".open-btn");

let stage = 1; // 1 = question, 2 = yippee page


// Envelope click
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});


// NO button random movement
noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


// YES button logic
// FIRST YES → show page 2
yesBtn.addEventListener("click", () => {

    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    page1.classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
    yesContinue.style.display = "inline-block";

});

// SECOND YES → page 3
yesContinue.addEventListener("click", () => {
    page1.style.display = "none";
    page3.style.display = "flex";

    page3.style.opacity = "1";
    page3.style.transform = "scale(1)";
});
openBtn.addEventListener("click", () => {
    page3.style.display = "none";
    page4.style.display = "flex";

    page4.style.opacity = "1";
    page4.style.transform = "scale(1)";
});
