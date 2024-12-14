// Selectors
const toggleBtn = document.querySelector("#toggle-btn");
const scrollProgressBar = document.getElementById("scroll-progress");
const SigninBtn = document.querySelector(".navbar__signin-btn");
const bodyElement = document.body;
const header = document.querySelector("header");
let darkmode = localStorage.getItem("darkmode");

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

// Ensure the scroll progress bar exists before attempting to use it
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

// Ensure the show more button exists before adding event listener
if (showMoreButton) {
  showMoreButton.addEventListener("click", function () {
    for (let i = currenListen; i < currenListen + 6; i++) {
      if (i < boxes.length) {
        boxes[i].style.display = "inline-block";
      }
    }
    currenListen += 6;
    if (currenListen >= boxes.length) {
      showMoreButton.style.display = "none";
    }
  });
}
