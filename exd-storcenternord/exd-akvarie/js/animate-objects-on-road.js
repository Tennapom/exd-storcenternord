"use strict";

// funktion der afspiller lyd når boble klikkes og tilføjer pop animation
function handleBubbleClick(event) {
  const bubbleSound = new Audio("../sound/bubble-pop.mp3"); //ændrer lydfil til boblelyd
  bubbleSound.play();
}

// venter med at hente js siden tilden hele html er loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers to all bubbles
  document.querySelectorAll(".bubble").forEach((bubble) => {
    bubble.addEventListener("click", handleBubbleClick);
  });
});
