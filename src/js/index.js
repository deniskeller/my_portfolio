//switch input
const btn = document.querySelector(".toggle-checkbox");
const input = document.querySelector(".toggle-checkbox__input");
const slider = document.querySelector(".toggle-checkbox__slider");
const client = document.querySelectorAll(".client");
const manager = document.querySelectorAll(".manager");

const changeValue = () => {
  input.checked = !input.checked;
  if (input.checked) {
    slider.classList.add("is_active");
    client.forEach((item) => {
      item.style.display = "none";
    });
    manager.forEach((item) => {
      item.style.display = "block";
    });
  } else {
    slider.classList.remove("is_active");
    client.forEach((item) => {
      item.style.display = "block";
    });
    manager.forEach((item) => {
      item.style.display = "none";
    });
  }
  console.log(input.checked);
};
btn.addEventListener("click", changeValue);

//scroll to aboutme block
const aboutmeBlock = document.getElementById("aboutme-content");
const toggleBtn = document.querySelector(".toggle-checkbox");

function scrollToBlock() {
  aboutmeBlock.scrollIntoView({ block: "start", behavior: "smooth" });
}
toggleBtn.addEventListener("click", scrollToBlock);

//show menu target project

const menuList = document.querySelectorAll(".project");
const menuProject = document.querySelectorAll(".project__title");
const close = document.querySelectorAll(".info__close");
for (let i = 0; i < menuList.length; i++) {
  menuProject[i].addEventListener("click", () => {
    document.querySelectorAll(".project__info")[i].classList.remove("hide");
  });
  close[i].addEventListener("click", () => {
    document.querySelectorAll(".project__info")[i].classList.add("hide");
  });
}
