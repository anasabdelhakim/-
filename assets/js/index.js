//show more

let showMoreButton = document.querySelector(".show-more");
let currenListen = 3;
let boxes = [...document.querySelectorAll(".slider-content-wrapper-box")];
if (showMoreButton) {
  if (boxes.length <= 3) {
    showMoreButton.style.display = "none";
  }
}

boxes.forEach((box, index) => {
  box.style.display = index < currenListen ? "inline-block" : "none";
});
showMoreButton.addEventListener("click", function () {
  // Show the next 6 boxes
  for (let i = currenListen; i < currenListen + 6; i++) {
    if (i < boxes.length) {
      boxes[i].style.display = "inline-block";
    }
  }

  // Update the current count
  currenListen += 6;

  // Hide the button if all boxes are displayed
  if (currenListen >= boxes.length) {
    showMoreButton.style.display = "none";
  }
});
