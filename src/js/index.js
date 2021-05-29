const btn = document.querySelector(".toggle-checkbox");
const input = document.querySelector(".toggle-checkbox__input");
const slider = document.querySelector(".toggle-checkbox__slider");

const changeValue = () => {
  input.checked = !input.checked;
  if (input.checked) {
    slider.classList.add("is_active");
  } else {
    slider.classList.remove("is_active");
  }
  console.log(input.checked);
};

btn.addEventListener("click", changeValue);
