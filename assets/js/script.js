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

toggleBtn.addEventListener("click", function () {
  let darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

const handleScroll = () => {
  // Get current scroll position and viewport/page dimensions
  const scrollTop = window.scrollY;
  const totalHeight = document.body.scrollHeight;
  const viewportHeight = document.documentElement.clientHeight;

  // Update scroll progress bar
  if (scrollProgressBar) {
    const scrollPercentage = (scrollTop / (totalHeight - viewportHeight)) * 100;
    scrollProgressBar.style.width = `${Math.round(scrollPercentage)}%`;
  }

  // Show/Hide header border based on scroll position
  if (scrollTop === 0) {
    header?.classList.remove("removeBorder");
  } else {
    header?.classList.add("removeBorder");
  }
};

// Attach scroll event handler (passive for better performance)
window.addEventListener("scroll", handleScroll, { passive: true });

//show more

let showMoreButton = document.querySelector(".show-more");
let currenListen = 3;
let boxes = [...document.querySelectorAll(".slider-content-wrapper-box")];
boxes.forEach((box, index) => {
  box.style.display = index < currenListen ? "inline-block" : "none";
});
let profile = document.querySelectorAll(".sign-form");
document.querySelectorAll(".user-btn").forEach((element) => {
  element.onclick = () => {
    profile.forEach((sign) => {
      sign.classList.toggle("active");
    });
  };
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
