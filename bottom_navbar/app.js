const content = document.querySelectorAll(".content");
const menus = document.querySelectorAll(".menu");

menus.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    hideButton();
    hideContent();
    menu.classList.add("active");
    content[index].classList.add("visible");
  });
});
menus[0].classList.add("active");
const hideButton = () => {
  menus.forEach((menu) => {
    menu.classList.remove("active");
  });
};
const hideContent = () => {
  content.forEach((content) => {
    content.classList.remove("visible");
  });
};
