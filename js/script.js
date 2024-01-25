// BURGER ICON

const mobileBtn = document.getElementById("mobile-cta");
      const nav = document.querySelector("nav");
      const mobileBtnExit = document.getElementById("mobile-exit");

      // When Menu is clicked
      mobileBtn.addEventListener("click", () => {
        nav.classList.add("menu-btn");
      });

      // When Exit is clicked
      mobileBtnExit.addEventListener("click", () => {
        nav.classList.remove("menu-btn");
      });



      // SLICK


