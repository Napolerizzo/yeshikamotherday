const btn = document.getElementById("loveBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.classList.remove("hidden");
});
