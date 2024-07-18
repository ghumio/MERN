let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

let prev_button = document.getElementById("left");
let next_button = document.getElementById("right");

let image = document.getElementById("slider");

let index = 0;
image.src = images[index];

function next() {
  index++;
  if (index == images.length) {
    index = 0;
  }
  image.src = images[index];
}

function previous() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  image.src = images[index];
}
next_button.addEventListener("click", next);
prev_button.addEventListener("click", previous);

setInterval(next, [3000]);
