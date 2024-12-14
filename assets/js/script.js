// Selectors
const toggleBtn = document.querySelector("#toggle-btn");
const scrollProgressBar = document.getElementById("scroll-progress");
const SigninBtn = document.querySelector(".navbar__signin-btn");
const bodyElement = document.body;
const header = document.querySelector("header");
let darkmode = localStorage.getItem("darkmode");

// Function to apply dark mode
const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  toggleBtn.classList.add("fa-moon");
  SigninBtn.classList.add("active-btn");
  localStorage.setItem("darkmode", "active");
};

// Function to disable dark mode
const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  toggleBtn.classList.remove("fa-moon");
  SigninBtn.classList.remove("active-btn");
  localStorage.setItem("darkmode", null);
};

// Immediately apply saved theme on page load
(function () {
  const darkmode = localStorage.getItem("darkmode");
  if (darkmode === "active") enableDarkmode();
})();

// Ensure the toggle button exists before attaching the event listener
if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    let darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "active") {
      enableDarkmode();
    } else {
      disableDarkmode();
    }
  });
}

// Handle scrolling for progress bar and header border
const handleScroll = () => {
  if (scrollProgressBar) {
    const scrollTop = window.scrollY;
    const totalHeight = document.body.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (totalHeight - viewportHeight)) * 100;
    scrollProgressBar.style.width = `${Math.round(scrollPercentage)}%`;
  }

  if (header) {
    if (window.scrollY === 0) {
      header.classList.remove("removeBorder");
    } else {
      header.classList.add("removeBorder");
    }
  }
};

// Attach scroll event handler (passive for better performance)
window.addEventListener("scroll", handleScroll, { passive: true });

// Handle Show More Button
const showMoreButton = document.querySelector(".show-more");
const boxes = [...document.querySelectorAll(".slider-content-wrapper-box")];
let currenListen = 3;

if (showMoreButton) {
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
    currenListen += 6;

    // Hide the button if all boxes are displayed
    if (currenListen >= boxes.length) {
      showMoreButton.style.display = "none";
    }
  });
}
