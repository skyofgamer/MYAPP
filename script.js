document.addEventListener("DOMContentLoaded", function () {
    const navIcons = document.querySelectorAll(".nav-icon");
  
    navIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        navIcons.forEach((navIcon) => {
          navIcon.classList.remove("active");
        });
        icon.classList.add("active");
      });
    });
  });
  