const projectCycleImages = {
  1: [
    "./Assets/Pictures/MazeGame (1).png",
    "./Assets/Pictures/MazeGame (2).png",
    "./Assets/Pictures/MazeGame (3).png",
  ],
  2: [
    "./Assets/Pictures/Space (1).png",
    "./Assets/Pictures/Space (2).png",
    "./Assets/Pictures/Space (3).png",
  ],
  3: [
    "./Assets/Pictures/UnSprouted (1).png",
    "./Assets/Pictures/UnSprouted (2).png",
    "./Assets/Pictures/UnSprouted (3).png",
  ],
};

let index = {
  1: 0,
  2: 0,
  3: 0,
};

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function cycleImages(projectNumber) {
  //Index basically iterates through all images and returns to 0 when reaching the last image
  //Explanation: x = 3, i = 0. i + 1 = 1, 1 % 3 = 1, i + 1 = 2, 2 % 3 = 2, 3 % 3 = 0
  //Goes up to length - 1 due to arrays starting at index 0 not 1
  const imageElement = document.getElementById(
    `project-game-image_${projectNumber}`
  );
  const images = projectCycleImages[projectNumber];
  index[projectNumber] =
    (index[projectNumber] + 1) % projectCycleImages[projectNumber].length;
  imageElement.src = images[index[projectNumber]];
}

/* Data collection */

const msg = document.getElementById("submited-message");
const scriptURL =
  "https://script.google.com/macros/s/AKfycby1fG7IdxabJ7ZRM2oAGQzhDmCZbmiXLsAgI4Spy_ePje0-1lLcpAD2Je5QFa_rezF_YA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {msg.innerHTML = "Message sent!"
        setTimeout(function(){msg.innerHTML = ""},5000);
        form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
