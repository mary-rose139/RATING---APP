const buttons = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit");
const ratingText = document.getElementById("selected-rating");

let rating = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    rating = button.textContent;
  });
});


submitBtn.addEventListener("click", () => {
  if (rating > 0) {
    ratingText.textContent = rating;

    setTimeout(() => {
      const ratingCard = document.querySelector(".rating-card");
      const thankCard = document.querySelector(".thank-you-hidden");

      ratingCard.style.display = "none";
      thankCard.style.display = "block";
    }, 2000);
  } else {
    alert("Please pick one rating!");
  }
});
