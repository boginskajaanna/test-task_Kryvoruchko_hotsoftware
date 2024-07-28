document.addEventListener("DOMContentLoaded", function () {
  //переключение секций по клику в aside
  const links = document.querySelectorAll(".aside__link");
  const sections = document.querySelectorAll(".info__section");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      sections.forEach((section) => {
        section.classList.add("hidden");
      });

      const targetId = this.getAttribute("data-target");
      document.getElementById(targetId).classList.remove("hidden");

      links.forEach((link) => link.classList.remove("aside__link--active"));
      this.classList.add("aside__link--active");
    });
  });

  
  //аккордеон
  const titles = document.querySelectorAll(".accordeon__title");

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const info = this.nextElementSibling;
      const isHidden = info.classList.contains("hidden");
      const icon = this.querySelector("img");
      const item = this.parentElement;

      if (isHidden) {
        info.classList.remove("hidden");
        info.style.maxHeight = info.scrollHeight + "px";
        icon.classList.remove("rotate-45");
        icon.classList.add("rotate-0");
        item.classList.remove("terms__item");
        item.classList.add("terms__item--active");
      } else {
        info.style.maxHeight = "0";
        info.addEventListener(
          "transitionend",
          () => {
            info.classList.add("hidden");
            icon.classList.remove("rotate-0");
            icon.classList.add("rotate-45");
            item.classList.remove("terms__item--active");
            item.classList.add("terms__item");
          },
          { once: true }
        );
      }
    });
  });

  //подгрузка контента в about по клику
  const button = document.querySelector(".show-more-btn");
  const content = document.querySelector(".about");

  button.addEventListener("click", function () {
    content.classList.toggle("expanded");

    if (content.classList.contains("expanded")) {
      content.classList.add("no-gradient");
    } else {
      content.classList.remove("no-gradient");
    }

    button.style.display = "none";
  });
});
