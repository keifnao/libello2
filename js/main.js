import Timer from "./timer.js";
import Mindfulness from "./mindfulness.js";


// let reverse = true;

// const timerButton = document.getElementById("timerButton");

// if (timerButton.addEventListener)
//     timerButton.addEventListener("click", buildTimer, false);
// else if (timerButton.attatchEvent)
//     timerButton.attachEvent("onclick", buildTimer);


// function buildTimer() {

//     if (reverse) {
//         new Timer(document.querySelector(".module__timer"));
//     } else {
//         document.querySelector(".module__timer").textContent = "";
//     }

//     reverse = !reverse;
// }





new Mindfulness(document.querySelector(".module__mindfulness"));

