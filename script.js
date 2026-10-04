/* =========================================
   AISHU'S 2ND LOVE ANNIVERSARY
   JavaScript File
========================================= */


/* Current Page */

let currentPage = 1;


/* =========================================
   ANNIVERSARY DATE LOGIN
========================================= */

document
  .getElementById("dateForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();

    const input =
      document.getElementById("anniversaryDate");

    const error =
      document.getElementById("dateError");


    /* Correct Anniversary Date */

    if (input.value.trim() === "05/10/24") {

      document
        .getElementById("loginPage")
        .classList.remove("active");

      document
        .getElementById("page1")
        .classList.add("active");

    } else {

      error.textContent =
        "That is not our date. Try again, my love.";

      input.value = "";

      input.focus();
    }

});


/* =========================================
   NEXT PAGE BUTTONS
========================================= */

document
  .querySelectorAll("[data-next]")
  .forEach((button) => {

    button.addEventListener("click", () => {

      /* Hide current page */

      document
        .getElementById(`page${currentPage}`)
        .classList.remove("active");


      /* Go to next page */

      currentPage += 1;


      /* Show next page */

      document
        .getElementById(`page${currentPage}`)
        .classList.add("active");

    });

});


/* =========================================
   CREATE FALLING HEART
========================================= */

function addHeart(extra = false) {

  const heart =
    document.createElement("span");


  heart.className = "heart";


  /* Random horizontal position */

  heart.style.left =
    `${Math.random() * 100}%`;


  /* Heart falling speed */

  heart.style.setProperty(
    "--duration",
    `${
      extra
        ? 3 + Math.random() * 2
        : 6 + Math.random() * 5
    }s`
  );


  /* Heart movement */

  heart.style.setProperty(
    "--drift",
    `${-45 + Math.random() * 90}px`
  );


  /* Add heart to page */

  document
    .getElementById("heartField")
    .appendChild(heart);


  /* Remove heart after animation */

  heart.addEventListener(
    "animationend",
    () => {
      heart.remove();
    }
  );

}


/* =========================================
   CONTINUOUS FALLING HEARTS
========================================= */

setInterval(() => {

  addHeart();

}, 650);


/* =========================================
   CELEBRATE OUR LOVE BUTTON
========================================= */

document
  .getElementById("celebrateButton")
  .addEventListener("click", () => {

    /* Show final message */

    document
      .getElementById("finalNote")
      .classList.add("show");


    /* Heart celebration */

    for (
      let index = 0;
      index < 18;
      index += 1
    ) {

      setTimeout(
        () => addHeart(true),
        index * 70
      );

    }

});