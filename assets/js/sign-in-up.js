const input = document.querySelectorAll("input");
const inputFields = document.querySelectorAll(".inputs-form input");
const PasswordEyeHidden = document.getElementById("password_hidden");
const Passwordinput = document.querySelector(".inputPassword");

// Navigate to the next input when pressing Enter
input.forEach((input, index, inputs) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });
});

// Focus and Blur Event Handlers for Input Fields
inputFields.forEach((input) => {
  input.addEventListener("focus", () => {
    const parentForm = input.closest(".inputs-form");
    const inputDetails = parentForm.querySelector(".input-details");

    if (inputDetails) {
      inputDetails.classList.add("activeinput");
    }
    parentForm.classList.add("inputs-formActive");
  });

  input.addEventListener("blur", () => {
    const parentForm = input.closest(".inputs-form");
    const inputDetails = parentForm.querySelector(".input-details");

    if (inputDetails) {
      if (input.value.trim() !== "") {
        inputDetails.classList.add("activeinput");
      } else {
        inputDetails.classList.remove("activeinput");
      }
    }
    parentForm.classList.remove("inputs-formActive");
  });
});

// Initialize the visibility icon to be hidden
PasswordEyeHidden.classList.add("unshowPassword");

// Add click event listener to the visibility icon
PasswordEyeHidden.addEventListener("click", function () {
  if (Passwordinput.type === "password") {
    Passwordinput.type = "text";
    PasswordEyeHidden.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    Passwordinput.type = "password";
    PasswordEyeHidden.classList.replace("fa-eye", "fa-eye-slash");
  }
});

// Add input event listener to the password input field
Passwordinput.addEventListener("input", function () {
  if (Passwordinput.value.trim() !== "") {
    PasswordEyeHidden.classList.remove("unshowPassword");
  } else {
    PasswordEyeHidden.classList.add("unshowPassword");
    PasswordEyeHidden.classList.replace("fa-eye", "fa-eye-slash");
    Passwordinput.type = "password";
  }
});

// Function to toggle dropdown visibility and arrow rotation
const toggleDropdown = (dropdown) => {
  const options = dropdown.querySelector(".dropdown-options");
  const arrow = dropdown.querySelector(".dropdown-arrow");
  options.classList.toggle("dropdown-options-show");
  arrow.classList.toggle("dropdown-arrow-rotate");
};

// Function to update the selected value
const updateSelectedValue = (dropdown, value) => {
  const selected = dropdown.querySelector(".dropdown-selected");
  selected.childNodes[0].nodeValue = value; // Replaces the text, ensuring no duplication
};

// Handle all dropdowns
const dropdowns = document.querySelectorAll(".dropdown-container");

dropdowns.forEach((dropdown) => {
  const selected = dropdown.querySelector(".dropdown-selected");
  const options = dropdown.querySelectorAll(".dropdown-options input");

  // Add click event to toggle the dropdown
  selected.addEventListener("click", () => toggleDropdown(dropdown));

  // Add change event to each option
  options.forEach((option) => {
    option.addEventListener("change", () => {
      if (option.checked) {
        const newValue = option.nextElementSibling.getAttribute("data-txt");
        updateSelectedValue(dropdown, newValue);
        toggleDropdown(dropdown); // Close the dropdown after selection
      }
    });
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      const options = dropdown.querySelector(".dropdown-options");
      const arrow = dropdown.querySelector(".dropdown-arrow");
      options.classList.remove("dropdown-options-show");
      arrow.classList.remove("dropdown-arrow-rotate");
    }
  });
});
